import { getFirestore } from 'firebase-admin/firestore';
import { getAuth } from 'firebase-admin/auth';
import * as functions from 'firebase-functions';

const createOrgUser = functions.https.onCall(async (data, context) => {
  try {
    if (!context.auth) {
      return {
        success: false,
        message: 'User is not authenticated',
      };
    }

    // Destructure data from the request
    const { firstName, lastName, email, phone, password, locations, userRole } = data;

    // Check if required fields are present
    if (!firstName || !lastName || !email || !password || !locations || !userRole) {
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
      // Create the user with Firebase Authentication
      const newUser = await getAuth().createUser({
        email,
        password,
      });

      // Set custom claims based on userType
      const newClaims = {
        userRole: userRole,
      };

      // Update the user with custom claims
      await getAuth().setCustomUserClaims(newUser.uid, newClaims);

      // Assign values to newUserData
      const newUserData = {
        userId: newUser.uid,
        firstName,
        lastName,
        email,
        phone: sanitizedPhone,
        locations: locationPaths, // will be an array of location references
        userRole,
      };

      // Set user data in Firestore
      transaction.set(usersCollection.doc(newUser.uid), newUserData);

      return {
        success: true,
        userData: newUserData,
        message: `Added ${firstName} ${lastName} to your organization`,
      };
    });

    return transactionResult;
  } catch (error) {
    return { success: false, message: `Something went wrong: ${error.message}` };
  }
});

export default createOrgUser;
