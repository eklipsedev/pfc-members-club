import { getUserDataFromLocalStorage } from '../services/firebase/utils';

export const setSavedItemsObserver = () => {
  const userData = getUserDataFromLocalStorage();

  if (userData) {
    const { savedItems } = userData;

    if (savedItems) {
      // Function to check if an item is favorited
      function isItemFavorited(itemId) {
        return savedItems.some((savedItem) => savedItem.id === itemId);
      }

      // Function to check favorited items
      function checkFavoritedItems(items) {
        items.forEach((item) => {
          const itemId = item.dataset.id;

          if (itemId && isItemFavorited(itemId)) {
            // Item is favorited, add your logic here
            item.querySelector('[data-unsave]').style.display = 'block';
            item.querySelector('[data-save]').style.display = 'none';
          }
        });
      }

      // Check favorited items among existing elements
      const existingItems = document.querySelectorAll('[data-items] [data-id]');
      checkFavoritedItems(existingItems);

      // Configure and start the Mutation Observer
      const itemList = document.querySelector('[data-items]');

      if (itemList) {
        const observerConfig = { childList: true, subtree: true };
        const observer = new MutationObserver((mutations) => {
          mutations.forEach((mutation) => {
            if (mutation.addedNodes.length > 0) {
              // New nodes have been added
              checkFavoritedItems(mutation.addedNodes);
            }
          });
        });

        observer.observe(itemList, observerConfig);
      }
    }
  }
};
