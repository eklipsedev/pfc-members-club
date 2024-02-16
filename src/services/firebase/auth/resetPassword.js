import { confirmPasswordReset } from 'firebase/auth';

import { auth } from '../firebase-config';

export const resetPassword = async (password) => {
  try {
    // Get the action code from the URL
    const actionCode = new URLSearchParams(window.location.search).get('oobCode');

    if (!actionCode) return { success: false, message: 'No action code is present.' };

    await confirmPasswordReset(auth, actionCode, password);

    return { success: true, message: 'Successfully reset the password.' };
  } catch (error) {
    return { success: false, message: error };
  }
};
