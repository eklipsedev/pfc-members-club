import { updateProfile } from 'firebase/auth';
import { runTransaction } from 'firebase/firestore';

import { firestore } from '../../services/firebase/firebase-config';
import { getCurrentUser, getUserDocRef } from '../../services/firebase/utils';

export const updateUserProfile = async (firstNameField, lastNameField, phoneField) => {
  try {
    const user = await getCurrentUser();

    if (user) {
      const docRef = getUserDocRef();

      // Use a Firestore transaction to ensure atomicity
      await runTransaction(firestore, async (transaction) => {
        // Get the current snapshot of user data from Firestore
        const docSnapshot = await transaction.get(docRef);

        if (!docSnapshot.exists()) {
          return { success: false, error: "User's document not found in Firestore" };
        }

        const userData = docSnapshot.data();

        const setFirstNameValue = firstNameField ? firstNameField.value : '';
        const setLastNameValue = lastNameField ? lastNameField.value : '';
        const setPhoneValue = phoneField ? phoneField.value : '';

        const updatedDocData = {
          firstName: setFirstNameValue,
          lastName: setLastNameValue,
          phone: setPhoneValue,
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

        // Optionally, update user information in localStorage
        localStorage.setItem(
          'userData',
          JSON.stringify({
            ...userData,
            ...updatedDocData,
          })
        );
      });
      return { success: true, message: 'Profile updated successfully' };
    }
    return { success: false, message: 'User is not authenticated' };
  } catch (error) {
    return { success: false, message: error.message };
  }
};
