import { getFirestore } from 'firebase-admin/firestore';
import { getAuth } from 'firebase-admin/auth';
import * as functions from 'firebase-functions';

// legacy function to create user
const createUserLegacy = functions.https.onCall(async (data, context) => {
  try {
    function roleIsValid(role) {
      const validRoles = ['admin', 'nonadmin']; //To be adapted with your own list of roles
      return validRoles.includes(role);
    }

    //Checking that the new user role is valid
    const role = data.role;

    if (!roleIsValid(role)) {
      throw new InvalidRoleError('The "' + role + '" role is not a valid role');
    }

    const newUserData = {
      email: data.email,
      firstName: data.firstName,
      lastName: data.lastName,
      role: data.role,
    };

    const userRecord = await getAuth().createUser({
      email: data.email,
      password: data.password,
    });

    const userId = userRecord.uid;

    const claims = {};
    claims[role] = true;
    claims['PFC'] = true;

    await getAuth().setCustomUserClaims(userId, claims);
    await getFirestore().collection('users').doc(userId).set(newUserData);

    return { result: 'The new user has been successfully created.' };
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

export default createUserLegacy;
