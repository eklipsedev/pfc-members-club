import { updateProfile } from 'firebase/auth';
import { runTransaction, serverTimestamp } from 'firebase/firestore';

import { getUser, getUserId } from '../../globals';
import { firestore } from '../../services/firebase/firebase-config';
import { getUserDocRef } from '../../services/firebase/utils';

export const updateUserProfile = async (firstName, lastName, phone) => {
  const user = getUser();

  if (!user) return { success: false, message: 'User is not authenticated' };

  try {
    const userId = getUserId();
    const docRef = getUserDocRef(userId);

    // Use a Firestore transaction to ensure atomicity
    await runTransaction(firestore, async (transaction) => {
      // Get the current snapshot of user data from Firestore
      const docSnapshot = await transaction.get(docRef);

      if (!docSnapshot.exists()) {
        return { success: false, error: "User's document not found in Firestore" };
      }

      const userData = docSnapshot.data();

      const setFirstNameValue = firstName ? firstName : '';
      const setLastNameValue = lastName ? lastName : '';
      const setPhoneValue = phone ? phone : '';

      const updatedDocData = {
        firstName: setFirstNameValue,
        lastName: setLastNameValue,
        phone: setPhoneValue,
        lastUpdated: serverTimestamp(),
      };

      // Update user profile in Firestore
      transaction.update(docRef, {
        ...userData,
        ...updatedDocData,
      });

      // Update user phone in Firebase Authentication
      await updateProfile(user, {
        displayName: `${setFirstNameValue} ${setLastNameValue}`,
        phoneNumber: setPhoneValue,
      });

      // Update user information in localStorage
      localStorage.setItem(
        'userData',
        JSON.stringify({
          ...userData,
          ...updatedDocData,
        })
      );
    });
    return { success: true, message: 'Profile updated successfully' };
  } catch (error) {
    return { success: false, message: error };
  }
};
