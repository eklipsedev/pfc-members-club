import { displayError, displaySuccess } from '../utils/formUtils';
import { renderSavedItems } from './renderSavedItems';
import { saveItem } from './saveItem';
import { unsaveItem } from './unsaveItem';

export const handleSaveItemClick = () => {
  document.addEventListener('click', async (e) => {
    const element = e.target;
    if (element.hasAttribute('data-save')) {
      // save element, proceed with function
      const dynItem = element.closest('.w-dyn-item');
      const itemId = dynItem.getAttribute('data-id');

      const loader = element.nextElementSibling.nextElementSibling;
      const savedIcon = element.nextElementSibling;

      try {
        element.style.display = 'none';
        loader.style.display = 'block';

        const result = await saveItem(itemId);

        if (result.success) {
          savedIcon.style.display = 'block';
          loader.style.display = 'none';
          displaySuccess(result.message);
        } else {
          element.style.display = 'block';
          loader.style.display = 'none';
          displayError(result.message);
        }
      } catch (error) {
        element.style.display = 'block';
        loader.style.display = 'none';
        displayError(error.message);
      }
    }
  });
};

export const handleUnsaveItemClick = () => {
  document.addEventListener('click', async (e) => {
    const element = e.target;
    if (element.hasAttribute('data-unsave')) {
      // unsave element, proceed with function
      const dynItem = element.closest('.w-dyn-item');
      const itemId = dynItem.getAttribute('data-id');

      const loader = element.nextElementSibling;
      const unsavedIcon = element.previousElementSibling;

      try {
        element.style.display = 'none';
        loader.style.display = 'block';

        const result = await unsaveItem(itemId);

        if (result.success) {
          unsavedIcon.style.display = 'block';
          loader.style.display = 'none';
          // if it's the favorites page, remove the item when unsaved
          const favoritesList = dynItem.closest("[data-pfc-item='favorites']");
          if (favoritesList) {
            dynItem.remove();

            if (!favoritesList.querySelectorAll('.w-dyn-item').length) {
              const favoritesEmpty = favoritesList.firstElementChild.nextElementSibling;

              favoritesEmpty.style.display = 'block';
            }
          }
          displaySuccess(result.message);
        } else {
          element.style.display = 'block';
          loader.style.display = 'none';
          displayError(result.message);
        }
      } catch (error) {
        element.style.display = 'block';
        loader.style.display = 'none';
        displayError(error.message);
      }
    }
  });
};

export const handleRenderSavedItems = async () => {
  const favoritesComponent = document.querySelector("[data-pfc-item='favorites']");

  if (favoritesComponent) {
    const favoritesList = favoritesComponent.firstElementChild;
    const favoritesEmpty = favoritesList.nextElementSibling;
    const favoritesLoading = favoritesEmpty.nextElementSibling;

    try {
      const result = await renderSavedItems();

      if (result.empty) {
        setTimeout(() => {
          favoritesEmpty.style.display = 'block';
          favoritesLoading.style.display = 'none';
        }, 500); // added a delay here since there was some list glitching
        return;
      }
      if (result.success) {
        // do something
        setTimeout(() => {
          favoritesList.style.display = 'block';
          favoritesLoading.style.display = 'none';
        }, 500); // added a delay here since there was some list glitching
      } else {
        displayError(result.message);
      }
    } catch (error) {
      displayError(error.message);
    }
  }
};
