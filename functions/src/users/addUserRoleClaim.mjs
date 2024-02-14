import functions from 'firebase-functions';
import { getAuth } from 'firebase-admin/auth';

const addUserRoleClaim = functions.https.onRequest(async (request, response) => {
  try {
    // UID of the user to whom you want to add a custom claim
    const uid = 'qS8xBNUk4XbvuOrukz29Er1FfdW2';

    // The user role you want to assign
    const userRole = 'corporateAdmin';

    // Add the custom claim to the user
    await getAuth().setCustomUserClaims(uid, { userRole: userRole });

    // Send a success response
    response.status(200).json({ success: true, message: 'Custom claim added successfully' });
  } catch (error) {
    console.error('Error adding custom claim:', error);
    response.status(500).json({ success: false, error: 'Internal Server Error' });
  }
});

export default addUserRoleClaim;
