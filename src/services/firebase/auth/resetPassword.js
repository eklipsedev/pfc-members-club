import { confirmPasswordReset } from 'firebase/auth';

import { auth } from '../firebase-config';

export const resetPassword = async (password) => {
  try {
    // Get the action code from the URL
    const actionCode = new URLSearchParams(window.location.search).get('oobCode');

    // Check if the action code is present
    if (actionCode) {
      // Reset the user's password with the provided action code
      try {
        await confirmPasswordReset(auth, actionCode, password);

        return { success: true, message: 'Successfully reset the password.' };
      } catch (error) {
        return { success: false, message: EvalError };
      }
    }
    return { success: false, message: 'No action code is present.' };
  } catch (error) {
    return { success: false, message: error };
  }
};
