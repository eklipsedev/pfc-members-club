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
    const { firstName, lastName, email, phone, password, userType } = data;

    // Check if required fields are present
    if (!firstName || !lastName || !email || !password || !userType) {
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
    const result = await getFirestore().runTransaction(async (transaction) => {
      // Read operations
      const userDocSnapshot = await transaction.get(usersCollection.doc(context.auth.uid));

      const organizationId = userDocSnapshot.data().organizationId;
      const organizationDocRef = getFirestore().doc(`organizations/${organizationId}`);
      const organizationDocSnapshot = await transaction.get(organizationDocRef);

      // Ensure all read operations are completed before moving to write operations

      // Create the user with Firebase Authentication
      const newUser = await getAuth().createUser({
        email,
        password,
      });

      // Set custom claims based on userType
      const newClaims = {
        userType: [userType],
      };

      // Update the user with custom claims
      await getAuth().setCustomUserClaims(newUser.uid, newClaims);

      // Data for the new user
      const newUserData = {
        id: newUser.uid,
        firstName,
        lastName,
        email,
        phone: sanitizedPhone,
        organizationId: organizationId,
        userType,
      };

      // Set user data in Firestore
      transaction.set(usersCollection.doc(newUser.uid), newUserData);

      if (organizationDocSnapshot.exists) {
        const organizationData = organizationDocSnapshot.data();

        // Create a reference to the new user's document
        const newUserRef = usersCollection.doc(newUser.uid);

        // Update the users array with the reference to the new user's document
        transaction.update(organizationDocRef, {
          users: [...(organizationData.users || []), newUserRef],
        });
      } else {
        // Handle the case where the organization document does not exist
        return {
          success: false,
          message: 'Organization document not found',
        };
      }

      return {
        success: true,
        userData: newUserData,
        message: `Added ${firstName} ${lastName} to your organization`,
      };
    });

    return result;
  } catch (error) {
    return { success: false, message: `Something went wrong: ${error.message}` };
  }
});

export default createOrgUser;
