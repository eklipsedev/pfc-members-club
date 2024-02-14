import { getFirestore } from 'firebase-admin/firestore';
import { getAuth } from 'firebase-admin/auth';
import * as functions from 'firebase-functions';


exports.updateUser = functions.firestore
  .document('users/{userId}')
  .onUpdate(async (change, context) => {
    const db = admin.firestore();
    const oldData = change.before.data();
    const newData = change.after.data();

    try {
      //Checking that the new user role is valid
      const role = newData.role;
      if (!roleIsValid(role)) {
        throw new InvalidRoleError('The "' + role + '" role is not a valid role');
      }

      const updateUser = {
        email: newData.email,
        firstName: newData.firstName,
        lastName: newData.lastName,
        password: newData.password,
        role: newData.role,
        emailVerified: false,
        disabled: false,
      };

      const userRecord = await admin.auth().getUserByEmail(oldData.email);
      const userId = userRecord.uid;

      await admin.auth().updateUser(userId, updateUser);

      const claims = {};
      claims[role] = true;
      claims['PFC'] = true;

      await admin.auth().setCustomUserClaims(userId, claims);

      return {
        result: 'The user has been successfully updated.',
      };
    } catch (error) {
      if (error.type === 'UnauthenticatedError') {
        throw new functions.https.HttpsError('unauthenticated', error.message);
      } else if (error.type === 'NotAnAdminError' || error.type === 'InvalidRoleError') {
        throw new functions.https.HttpsError('failed-precondition', error.message);
      } else {
        throw new functions.https.HttpsError('internal', error.message);
      }
    }
  });
