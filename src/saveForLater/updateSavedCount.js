import { getUserDataFromLocalStorage } from '../services/firebase/utils';

export const updateSavedCount = () => {
  const userData = getUserDataFromLocalStorage();

  if (userData) {
    const { savedItems } = userData;

    if (userData && savedItems.length) {
      // get all items that need count updated
      const savedCount = document.querySelectorAll('[data-save-count]');
      savedCount.forEach((element) => {
        element.textContent = savedItems.length;
      });
    }
  }
};
