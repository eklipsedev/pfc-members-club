// Import necessary Firebase modules
import { arrayUnion, getDoc, updateDoc } from 'firebase/firestore';

import { getUserId, setUserData } from '../globals';
import { getUserDocRef } from '../services/firebase/utils';
import { getUserDataFromLocalStorage } from '../services/firebase/utils';
import { updateSavedCount } from './updateSavedCount';

// Function to save item for later
export const saveItem = async (itemId) => {
  try {
    const userId = getUserId();

    if (userId) {
      const userDocRef = getUserDocRef(userId);
      const userSnapshot = await getDoc(userDocRef);

      if (userSnapshot.exists()) {
        // Check if the item is already saved
        const savedItems = userSnapshot.data().savedItems || [];
        if (!savedItems.find((item) => item.id === itemId)) {
          // Item is not saved, update Firestore document
          await updateDoc(userDocRef, {
            savedItems: arrayUnion({ id: itemId }),
          });

          // Update local storage with the saved item
          const userData = getUserDataFromLocalStorage() || { savedItems: [] };

          const updatedSavedItems = [...(userData.savedItems || []), { id: itemId }];

          const updatedObject = { ...userData, savedItems: updatedSavedItems };

          localStorage.setItem('userData', JSON.stringify(updatedObject));
          setUserData(updatedObject);

          updateSavedCount(updatedSavedItems);

          return { success: true, message: 'Item saved successfully' };
        }
        return { success: false, message: 'Item is already saved' };
      }
      return { success: false, message: "Couldn't find the users document" };
    }
    return { success: false, message: 'User is not authenticated' };
  } catch (error) {
    return { success: false, message: error.message };
  }
};
