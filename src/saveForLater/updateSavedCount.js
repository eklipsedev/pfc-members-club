import { getUserData } from '../globals';

export const updateSavedCount = (updatedItems) => {
  let savedItems;

  const userData = getUserData();

  userData ? (savedItems = userData.savedItems) : (savedItems = updatedItems);

  if (savedItems && savedItems.length) {
    // get all items that need count updated
    const savedCount = document.querySelectorAll('[data-save-count]');
    savedCount.forEach((element) => {
      element.textContent = savedItems.length;
    });
  }
};
