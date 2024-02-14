import { getFirestore } from 'firebase-admin/firestore';
import { getAuth } from 'firebase-admin/auth';
import * as functions from 'firebase-functions';

const deleteUserLegacy = functions.firestore
  .document('users/{userId}')
  .onDelete(async (snap, context) => {
    const db = admin.firestore();
    const data = snap.data();

    try {
      const userRecord = await admin.auth().getUserByEmail(data.email);
      const userId = userRecord.uid;

      await admin.auth().deleteUser(userId);

      return {
        result: 'The user has been successfully deleted.',
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

export default deleteUserLegacy;
