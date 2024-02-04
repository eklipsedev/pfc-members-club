// Import necessary Firebase modules
import { getDoc, updateDoc } from 'firebase/firestore';

import { getCurrentUser, getUserDocRef } from '../services/firebase/utils';
import { getUserDataFromLocalStorage } from '../services/firebase/utils';
import { updateSavedCount } from './updateSavedCount';

// Function to unsave item
export const unsaveItem = async (itemId) => {
  try {
    const user = await getCurrentUser();

    if (user) {
      const userDocRef = getUserDocRef();
      const userSnapshot = await getDoc(userDocRef);

      if (userSnapshot.exists()) {
        // Check if the item is saved
        const savedItems = userSnapshot.data().savedItems || [];
        const savedItemIndex = savedItems.findIndex((item) => item.id === itemId);

        if (savedItemIndex !== -1) {
          // Item is saved, update Firestore document
          savedItems.splice(savedItemIndex, 1);
          await updateDoc(userDocRef, { savedItems });

          // Update local storage without the unsaved item
          const userData = getUserDataFromLocalStorage() || { savedItems: [] };
          const updatedSavedItems = userData.savedItems.filter((item) => item.id !== itemId);
          localStorage.setItem(
            'userData',
            JSON.stringify({ ...userData, savedItems: updatedSavedItems })
          );

          updateSavedCount();

          return { success: true, message: 'Item unsaved successfully' };
        }
        return { success: false, message: 'This item is already unsaved' };
      }
      return { success: false, message: "Couldn't find the users document" };
    }
    return { success: false, message: 'User is not authenticated' };
  } catch (error) {
    return { success: false, message: error.message };
  }
};
