import { EmailAuthProvider, reauthenticateWithCredential, updatePassword } from 'firebase/auth';

import { getUser } from '../../globals';

export const updateUserPassword = async (currentPassword, newPassword) => {
  const user = getUser();

  if (!user) return { success: false, message: 'User is not authenticated' };

  try {
    // Create a credential with the user's email and current password
    const credential = EmailAuthProvider.credential(user.email, currentPassword);

    // Re-authenticate the user with the credential
    await reauthenticateWithCredential(user, credential);

    // Re-authentication successful, update the password
    await updatePassword(user, newPassword);

    return { success: true, message: 'Password updated successfully' };
  } catch (error) {
    return { success: false, message: error };
  }
};
