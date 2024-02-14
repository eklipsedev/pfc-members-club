import { getUserDataFromLocalStorage } from '../services/firebase/utils';
import { updateSavedCount } from './updateSavedCount';

export const renderSavedItems = async () => {
  try {
    const userData = getUserDataFromLocalStorage();

    if (userData) {
      const savedItems = userData.savedItems || [];

      updateSavedCount(savedItems);

      // check if there are any saved items
      // if not, return an error to display the empty state
      if (!savedItems.length) {
        return { empty: true };
      }

      // use Finsweet load to get all items in the list
      window.fsAttributes = window.fsAttributes || [];
      window.fsAttributes.push([
        'cmsload',
        (listInstances) => {
          // The callback passes a `listInstances` array with all the `CMSList` instances on the page.
          const [listInstance] = listInstances;

          if (userData) {
            listInstance.list.innerHTML = '';
            // The `renderitems` event runs whenever the list renders items after switching pages.
            listInstance.items.forEach((item) => {
              const itemId = item.element.getAttribute('data-id');

              // Check if the item's ID is in the savedItems array
              if (savedItems.some((savedItem) => savedItem.id === itemId)) {
                // append the item to the list
                listInstance.list.appendChild(item.element);
              }
            });
          }
        },
      ]);
      return {
        success: true,
        message: 'Successfully rendered saved items',
      };
    }
    return { success: false, message: 'User is not authenticated' };
  } catch (error) {
    return { success: false, message: error.message };
  }
};
