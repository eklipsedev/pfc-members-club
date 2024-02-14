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
    const { userId, firstName, lastName, email, phone, locations, userRole } = data;

    // Check if required fields are present
    if (!firstName || !lastName || !email || !locations || !userRole) {
      return {
        success: false,
        message: 'Missing required fields',
      };
    }

    // phone is optional, so it may be empty
    const sanitizedPhone = phone || null;

    // convert comma separated list into array of location references
    const locationsCollection = getFirestore().collection('locations');

    const locationPaths = locations
      .split(',')
      .map((locationId) => locationsCollection.doc(locationId).path);

    // Reference to the Firestore users collection
    const usersCollection = getFirestore().collection('users');

    // Use a Firestore transaction for atomicity
    const transactionResult = await getFirestore().runTransaction(async (transaction) => {
      // Read operations
      // Fetch the existing user record
      const userDocRef = usersCollection.doc(userId);
      const userSnapshot = await transaction.get(userDocRef);

      if (userSnapshot.exists) {
        const userRecord = await getAuth().getUser(userId);
        const customClaims = userRecord.customClaims;
        const userRoleClaims = customClaims.userRole || '';

        console.log(userRoleClaims);

        const updatedUserProperties = {
          displayName: `${firstName} ${lastName}`,
          email: email || userRecord.email,
        };

        // Update the user record
        await getAuth().updateUser(userId, updatedUserProperties);

        // Ensure all read operations are completed before moving to write operations

        // Set new custom claims if they changed
        if (userRole !== userRoleClaims) {
          const newClaims = {
            userRole: userRole,
          };

          // Update the user with custom claims
          await getAuth().setCustomUserClaims(userId, newClaims);
        }

        // Data for the new user
        const newUserData = {
          userId: userId,
          firstName,
          lastName,
          email,
          phone: sanitizedPhone,
          locations: locationPaths,
          userRole,
        };

        console.log(newUserData);

        // Update user data in Firestore
        transaction.update(userDocRef, newUserData);

        console.log('the document has been updated, the return follows');

        return {
          success: true,
          userData: newUserData,
          message: `Updated ${firstName} ${lastName} successfully`,
        };
      } else {
        return { success: false, message: 'User not found in Firestore' };
      }
    });

    return transactionResult;
  } catch (error) {
    console.error('Error updating user:', error);
    return { success: false, message: error.message };
  }
});

export default updateOrgUser;
