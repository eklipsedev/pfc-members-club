import { createListItem } from './createListItem';

export const updateListItem = async (user, usersList, usersListItem) => {
  const listItemToRemove = usersList.querySelector(`[data-id='${user.userId}']`);

  const listItemToAdd = await createListItem(user, usersList, usersListItem, 'update');

  // Append the cloned item to the users list
  usersList.replaceChild(listItemToAdd, listItemToRemove);
};
