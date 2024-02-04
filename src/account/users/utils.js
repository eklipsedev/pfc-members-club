import { getFormByAttribute } from '../../utils/formUtils';
import { openModal } from '../../utils/modal';

export const createListItem = (user, usersList, usersListItem) => {
  const clonedItem = usersListItem.cloneNode(true);

  const firstNameElement = clonedItem.querySelector("[data-pfc-member='firstName']");
  const lastNameElement = clonedItem.querySelector("[data-pfc-member='lastName']");
  const emailElement = clonedItem.querySelector("[data-pfc-member='email']");
  const userTypeElement = clonedItem.querySelector("[data-pfc-member='userType']");

  const toggleButton = clonedItem.querySelector('[data-toggle]');
  const updateUserButton = clonedItem.querySelector("[data-pfc-action='update-user']");
  const deleteUserButton = clonedItem.querySelector("[data-pfc-action='delete-user']");

  clonedItem.setAttribute('data-id', user.id);

  firstNameElement.textContent = user.firstName || '';
  lastNameElement.textContent = user.lastName || '';
  emailElement.textContent = user.email || '';
  userTypeElement.textContent = translateRole(user.userType) || '';

  const handleToggleButtonClick = () => {
    const dropdownContent = toggleButton.nextElementSibling;

    // Toggle the 'is-open' class on the dropdown content
    dropdownContent.classList.toggle('is-open');
  };

  const handleUpdateUserClick = () => {
    const form = getFormByAttribute('update-user');
    const firstNameElement = form.querySelector("[data-pfc-member='firstName']");
    const lastNameElement = form.querySelector("[data-pfc-member='lastName']");
    const emailElement = form.querySelector("[data-pfc-member='email']");
    const phoneElement = form.querySelector("[data-pfc-member='phone']");
    const userTypeElement = clonedItem.querySelector("[data-pfc-member='userType']");
    const idElement = form.querySelector("[data-pfc-member='id']");

    firstNameElement.value = user.firstName;
    lastNameElement.value = user.lastName;
    emailElement.value = user.email;
    phoneElement.value = user.phone || '';
    userTypeElement.value = user.userType;
    idElement.value = user.id;

    openModal('update-user');
  };

  const handleDeleteUserClick = () => {
    const form = getFormByAttribute('delete-user');
    const idElement = form.querySelector("[data-pfc-member='id']");

    idElement.value = user.id;

    openModal('delete-user');
  };

  updateUserButton.addEventListener('click', (e) => {
    e.target.parentElement.classList.remove('is-open');
    handleUpdateUserClick();
  });
  deleteUserButton.addEventListener('click', (e) => {
    e.target.parentElement.classList.remove('is-open');
    handleDeleteUserClick();
  });
  toggleButton.addEventListener('click', () => {
    handleToggleButtonClick();
  });

  // Append the cloned item to the users list
  usersList.appendChild(clonedItem);

  return clonedItem;
};

export const updateListItem = (user, usersList, usersListItem) => {
  const listItemToRemove = usersList.querySelector(`[data-id='${user.userId}']`);

  const listItemToAdd = createListItem(user, usersList, usersListItem);

  // Append the cloned item to the users list
  usersList.replaceChild(listItemToAdd, listItemToRemove);
};

export const translateRole = (text) => {
  switch (text) {
    case 'management':
      return 'Management';
    case 'fitness-staff':
      return 'Fitness Staff';
    case 'juice-bar-staff':
      return 'Shake/Smoothie Bar Staff';
    case 'other':
      return 'Other';
    default:
      return 'An unknown error occurred.';
  }
};
