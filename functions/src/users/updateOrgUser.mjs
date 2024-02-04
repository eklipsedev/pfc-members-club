import { getFirestore } from 'firebase-admin/firestore';
import { getAuth } from 'firebase-admin/auth';
import * as functions from 'firebase-functions';

const updateOrgUser = functions.https.onCall(async (data, context) => {
  try {
    if (!context.auth) {
      return {
        success: false,
        message: 'User is not authenticated',
      };
    }

    // Destructure data from the request
    const { userId, firstName, lastName, email, phone, userType } = data;

    // Check if required fields are present
    if (!firstName || !lastName || !email || !userType) {
      return {
        success: false,
        message: 'Missing required fields',
      };
    }

    // phone is optional, so it may be empty
    const sanitizedPhone = phone || null;

    // Reference to the Firestore users collection
    const usersCollection = getFirestore().collection('users');

    // Use a Firestore transaction for atomicity
    await getFirestore().runTransaction(async (transaction) => {
      // Read operations
      // Fetch the existing user record
      const userDocRef = usersCollection.doc(userId);
      const userSnapshot = await transaction.get(userDocRef);

      if (userSnapshot.exists) {
        const userRecord = await getAuth().getUser(userId);
        const customClaims = userRecord.customClaims;
        const userTypeClaims = customClaims.userType || [];

        const updatedUserProperties = {
          displayName: `${firstName} ${lastName}`,
          email: email || userRecord.email,
        };

        // Update the user record
        await getAuth().updateUser(userId, updatedUserProperties);

        // Ensure all read operations are completed before moving to write operations

        // Set new custom claims if they changed
        if (userTypeClaims.length && userType !== userTypeClaims[0]) {
          const newClaims = {
            userType: [userType],
          };

          // Update the user with custom claims
          await getAuth().setCustomUserClaims(userId, newClaims);
        }

        // Data for the new user
        const newUserData = {
          firstName,
          lastName,
          email,
          phone: sanitizedPhone,
          userType,
        };

        // Update user data in Firestore
        transaction.update(userDocRef, newUserData);

        return { success: true, message: `Updated ${firstName} ${lastName} successfully` };
      }

      return { success: false, message: 'User not found in Firestore' };
    });

    return { success: true, message: 'User updated successfully' };
  } catch (error) {
    console.error('Error updating user:', error);
    return { success: false, message: error.message };
  }
});

export default updateOrgUser;
