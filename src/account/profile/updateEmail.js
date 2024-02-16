import { updateEmail } from 'firebase/auth';
import { updateDoc } from 'firebase/firestore';

import { getUser } from '../../globals';
import { firestore } from '../../services/firebase/firebase-config';
import { getUserDocRef } from '../../services/firebase/utils';

export const updateUserEmail = async (newEmail) => {
  const user = getUser();

  if (!user) return { success: false, message: 'User is not authenticated' };

  try {
    const currentEmail = user.email;

    if (newEmail !== currentEmail) {
      await updateEmail(user, newEmail);

      const userDoc = getUserDocRef();
      const userDocData = userDoc.data();

      await updateDoc(user.uid, {
        ...userDocData,
        email: newEmail,
        lastUpdated: firestore.FieldValue.serverTimestamp(),
      });
      return { success: true, message: 'Email updated successfully' };
    }
  } catch (error) {
    return { success: false, message: error };
  }
};
