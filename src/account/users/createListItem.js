/* eslint-disable prefer-destructuring */
import { getUserClaims } from '../../globals';
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
  //const currentManagerLocation =
  //currentUserRole === 'locationManager' ? getUserData().locations[0] : [];

  // set user ID to the element for easy access
  clonedItem.setAttribute('data-id', user.userId);

  // handle setting the list item dropdown based on permission level
  if (user.userRole === 'corporateAdmin' && currentUserRole !== 'corporateAdmin') {
    userActionsDropdown.remove();
  } else if (
    user.userRole === 'multiLocationAdmin' &&
    (currentUserRole !== 'multiLocationAdmin' || currentUserRole !== 'corporateAdmin')
  ) {
    userActionsDropdown.remove();
  }

  // handle setting first, last and email
  firstNameElement.textContent = user.firstName || '--';
  lastNameElement.textContent = user.lastName || '--';
  emailElement.textContent = user.email || '--';

  // handle setting users locations for each list item
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

  // set user role element
  userRoleElement.textContent = user.userRole ? translateRole(user.userRole) : '--';

  const handleToggleButtonClick = () => {
    const dropdownContent = toggleButton.nextElementSibling;

    // Toggle the 'is-open' class on the dropdown content
    dropdownContent.classList.toggle('is-open');
  };

  // handle "view" button
  viewUserButton.href = `/members/user?userId=${user.userId}`;

  // handle "Update" button
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
    } else if (locations) {
      let locationPaths = [];

      locations.forEach((location) => {
        const transformedLocation = location.id.replace('locations/', '');
        locationPaths.push(transformedLocation);
      });
      locationsElement.value = locationPaths.join(','); //currentManagerLocation.replace('locations/', '');
    }

    userRoleElement.value = user.userRole;
    idElement.value = user.userId;

    openModal('update-user');
  };

  // handle "Delete" button
  const handleDeleteUserClick = () => {
    const form = getFormByAttribute('delete-user');
    const idElement = form.querySelector("[data-pfc-member='id']");

    idElement.value = user.userId;

    openModal('delete-user');
  };

  // handle event listeners
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

  // Append or prepend the cloned item to the users list
  if (type === 'create') {
    usersList.prepend(clonedItem);
  } else if (type === 'add') {
    usersList.appendChild(clonedItem);
  }

  return clonedItem;
};
