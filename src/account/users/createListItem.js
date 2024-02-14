/* eslint-disable prefer-destructuring */
import { getUserClaims, getUserData } from '../../globals';
import { hasAccess } from '../../services/firebase/utils';
import { getFormByAttribute } from '../../utils/formUtils';
import { openModal } from '../../utils/modal';
import { addToSelectedLocations } from './comboBox';
import { translateRole } from './utils';

export const createListItem = async (user, usersList, usersListItem, type = 'create') => {
  const clonedItem = usersListItem.cloneNode(true);

  const firstNameElement = clonedItem.querySelector("[data-pfc-member='firstName']");
  const lastNameElement = clonedItem.querySelector("[data-pfc-member='lastName']");
  const emailElement = clonedItem.querySelector("[data-pfc-member='email']");
  const locationElement = clonedItem.querySelector("[data-pfc-member='location']");
  const userRoleElement = clonedItem.querySelector("[data-pfc-member='userRole']");

  const toggleButton = clonedItem.querySelector('[data-toggle]');
  const viewUserButton = clonedItem.querySelector("[data-pfc-action='view-user']");
  const updateUserButton = clonedItem.querySelector("[data-pfc-action='update-user']");
  const deleteUserButton = clonedItem.querySelector("[data-pfc-action='delete-user']");

  const userActionsDropdown = toggleButton.parentElement;

  const currentUserRole = getUserClaims().userRole;
  const currentUserLocation =
    currentUserRole === 'locationManager' ? getUserData().locations[0] : '';

  if (
    (user.userRole === 'multiLocationAdmin' || user.userRole === 'corporateAdmin') &&
    !hasAccess(currentUserRole, 'multiLocationAdmin')
  ) {
    userActionsDropdown.remove();
  }

  clonedItem.setAttribute('data-id', user.userId);

  firstNameElement.textContent = user.firstName || '--';
  lastNameElement.textContent = user.lastName || '--';
  emailElement.textContent = user.email || '--';

  const { locations } = user;

  if (locations) {
    if (locations.length > 1) {
      locations.forEach((location) => {
        const clonedLocationElement = locationElement.cloneNode(true);
        clonedLocationElement.textContent = location.name;
        locationElement.parentElement.appendChild(clonedLocationElement);
      });
      locationElement.remove();
    } else if (locations.length === 1) {
      locationElement.textContent = locations[0].name;
    } else {
      locationElement.remove();
    }
  }

  userRoleElement.textContent = user.userRole ? translateRole(user.userRole) : '--';

  const handleToggleButtonClick = () => {
    const dropdownContent = toggleButton.nextElementSibling;

    // Toggle the 'is-open' class on the dropdown content
    dropdownContent.classList.toggle('is-open');
  };

  viewUserButton.href = `/members/user?userId=${user.userId}`;

  const handleUpdateUserClick = () => {
    const form = getFormByAttribute('update-user');
    const firstNameElement = form.querySelector("[data-pfc-member='firstName']");
    const lastNameElement = form.querySelector("[data-pfc-member='lastName']");
    const emailElement = form.querySelector("[data-pfc-member='email']");
    const phoneElement = form.querySelector("[data-pfc-member='phone']");
    const locationsElement = form.querySelector("[data-pfc-member='locations']");
    const comboBoxList =
      locationsElement.previousElementSibling.querySelector('.combo-box_dropdown-list') || null;
    const locationsPill = document.querySelector("[data-element='combo-box-pill']") || null;
    const locationSearchInput = form.querySelector('.combo-box_input') || null;
    const userRoleElement = form.querySelector("[data-pfc-member='userRole']");
    const idElement = form.querySelector("[data-pfc-member='id']");

    firstNameElement.value = user.firstName;
    lastNameElement.value = user.lastName;
    emailElement.value = user.email;
    phoneElement.value = user.phone || '';

    if (locations && comboBoxList) {
      if (locations.length) {
        locations.forEach((location) => {
          addToSelectedLocations(
            location,
            locationsPill,
            comboBoxList.firstChild,
            locationSearchInput,
            locationsElement
          );
        });
      } else {
        locationsElement.value = '';
      }
    } else {
      locationsElement.value = currentUserLocation.replace('locations/', '');
    }

    userRoleElement.value = user.userRole;
    idElement.value = user.userId;

    openModal('update-user');
  };

  const handleDeleteUserClick = () => {
    const form = getFormByAttribute('delete-user');
    const idElement = form.querySelector("[data-pfc-member='id']");

    idElement.value = user.userId;

    openModal('delete-user');
  };

  viewUserButton.addEventListener('click', () => {
    handleViewUserClick();
  });
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
  if (type === 'create') usersList.prepend(clonedItem);

  return clonedItem;
};
