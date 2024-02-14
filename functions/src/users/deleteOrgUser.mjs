import { getFirestore } from 'firebase-admin/firestore';
import { getAuth } from 'firebase-admin/auth';
import * as functions from 'firebase-functions';

const deleteOrgUser = functions.https.onCall(async (data, context) => {
  try {
    if (!context.auth) {
      return {
        success: false,
        message: 'User is not authenticated',
      };
    }

    // Destructure data from the request
    const { userId } = data;

    // Reference to the Firestore users collection
    const usersCollection = getFirestore().collection('users');

    // Use a Firestore transaction for atomicity
    const result = await getFirestore().runTransaction(async (transaction) => {
      // Read operations
      const userDocRef = usersCollection.doc(userId);
      const userDocSnapshot = await transaction.get(userDocRef);

      if (!userDocSnapshot.exists) {
        return {
          success: false,
          message: 'User document not found',
        };
      }

      // Delete the user from Firebase Authentication
      await getAuth().deleteUser(userId);

      // Delete the user document from Firestore
      transaction.delete(userDocRef);

      return {
        success: true,
        message: 'User deleted successfully',
      };
    });

    return result;
  } catch (error) {
    return { success: false, message: `Something went wrong: ${error.message}` };
  }
});

export default deleteOrgUser;
