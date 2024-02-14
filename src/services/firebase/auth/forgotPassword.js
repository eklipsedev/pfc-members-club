import { sendPasswordResetEmail } from 'firebase/auth';

import { auth } from '../firebase-config';

export const forgotPassword = async (email) => {
  try {
    // Send password reset email
    await sendPasswordResetEmail(auth, email);

    return { success: true, message: 'Reset password email was sent. Check your inbox.' };
  } catch (error) {
    return { success: false, message: error };
  }
};
