import { getAuth } from 'firebase-admin';
import { https } from 'firebase-functions';

const updateUserClaims = https.onCall(async (data, context) => {
  try {
    // Verify authentication (context.auth)
    if (!context.auth) {
      throw new https.HttpsError('unauthenticated', 'Authentication required.');
    }

    const { uid, newClaims } = data;

    // Ensure the user making the request has the necessary privileges (e.g., is an admin)
    // You can customize this check based on your application's requirements
    // ...

    // Update user claims using the Admin SDK
    await getAuth().setCustomUserClaims(uid, newClaims);

    return { success: true };
  } catch (error) {
    console.error('Error updating user claims:', error.message);
    throw new https.HttpsError('internal', 'Error updating user claims.');
  }
});

export default updateUserClaims;
