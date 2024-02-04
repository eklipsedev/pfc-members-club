import functions from 'firebase-functions';
import { getAuth } from 'firebase-admin/auth';

const addUserTypeClaim = functions.https.onRequest(async (request, response) => {
  try {
    // UID of the user to whom you want to add a custom claim
    const uid = 'QPuXfpC65lPHTHMRUGIYJ2X8myb2';

    // The array of user types you want to assign
    const userTypes = ['management'];

    // Add the custom claim to the user
    await getAuth().setCustomUserClaims(uid, { userType: userTypes });

    // Send a success response
    response.status(200).json({ success: true, message: 'Custom claim added successfully' });
  } catch (error) {
    console.error('Error adding custom claim:', error);
    response.status(500).json({ success: false, error: 'Internal Server Error' });
  }
});

export default addUserTypeClaim;
