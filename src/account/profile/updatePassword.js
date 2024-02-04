import { EmailAuthProvider, reauthenticateWithCredential, updatePassword } from 'firebase/auth';

import { getCurrentUser } from '../../services/firebase/utils';

export const updateUserPassword = async (currentPasswordField, newPasswordField) => {
  try {
    const user = await getCurrentUser();

    if (user) {
      const currentPassword = currentPasswordField.value; // Replace with the actual current password
      const newPassword = newPasswordField.value;

      // Create a credential with the user's email and current password
      const credential = EmailAuthProvider.credential(user.email, currentPassword);

      // Re-authenticate the user with the credential
      await reauthenticateWithCredential(user, credential);

      // Re-authentication successful, update the password
      await updatePassword(user, newPassword);

      return { success: true, message: 'Password updated successfully' };
    }

    return { success: false, message: 'User is not authenticated' };
  } catch (error) {
    return { success: false, message: error.message };
  }
};
