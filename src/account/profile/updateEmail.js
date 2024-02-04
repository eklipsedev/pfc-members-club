import { updateEmail } from 'firebase/auth';
import { updateDoc } from 'firebase/firestore';

import { getCurrentUser, getUserDocRef } from '../../services/firebase/utils';

export const updateUserEmail = async (emailField) => {
  try {
    const user = await getCurrentUser();

    if (user) {
      const currentEmail = user.email;
      const newEmail = emailField.value;

      if (newEmail !== currentEmail) {
        await updateEmail(user, newEmail);

        const userDoc = getUserDocRef();
        const userDocData = userDoc.data();

        await updateDoc(user.uid, {
          ...userDocData,
          email: newEmail,
        });
        return { success: true, message: 'Email updated successfully' };
      }
    }
    return { success: false, message: 'User is not authenticated' };
  } catch (error) {
    return { success: false, message: error.message };
  }
};
