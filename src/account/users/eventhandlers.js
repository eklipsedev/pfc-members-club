/* eslint-disable prefer-destructuring */
import { getUserClaims, getUserData } from '../../globals';
import {
  displayError,
  displayLoader,
  displaySuccess,
  getFormByAttribute,
  hideLoader,
} from '../../utils/formUtils';
import { closeModal, openModal } from '../../utils/modal';
import { createListItem } from './createListItem';
import { createOrgUser } from './createOrgUser';
import { deleteOrgUser } from './deleteOrgUser';
import { renderUsers } from './renderUsers';
import { searchUsers } from './searchUsers';
import { updateListItem } from './updateListItem';
import { updateOrgUser } from './updateOrgUser';
import { getTotalCount, getVisibleCount, setTotalCount, setVisibleCount } from './variables';

export const handleCreateOrgUser = () => {
  const form = getFormByAttribute('create-user');
  const usersComponent = document.querySelector("[data-pfc-item='users-list']");

  if (form && usersComponent) {
    const firstNameField = form.querySelector('[data-pfc-member="firstName"]');
    const lastNameField = form.querySelector('[data-pfc-member="lastName"]');
    const emailField = form.querySelector('[data-pfc-member="email"]');
    const phoneField = form.querySelector('[data-pfc-member="phone"]');
    const passwordField = form.querySelector('[data-pfc-member="password"]');
    const locationsField = form.querySelector('[data-pfc-member="locations"]');
    const userRoleField = form.querySelector('[data-pfc-member="userRole"]');
    const submitButton = form.querySelector('[type="submit"]');
    const resetButton = form.querySelector("[data-pfc-action='reset-form']");
    const createUserButton = document.querySelector("[data-pfc-action='create-user']:is(button)");

    const usersList = usersComponent.firstElementChild;
    const usersListItem = usersList.firstElementChild;

    const managerLocation = getUserData().locations[0];
    const isManager = getUserClaims().userRole === 'locationManager';

    if (isManager && managerLocation) locationsField.value = managerLocation;

    form.addEventListener('submit', async (e) => {
      e.preventDefault();

      try {
        displayLoader(submitButton, 'Creating...');

        const result = await createOrgUser(
          firstNameField.value,
          lastNameField.value,
          emailField.value,
          phoneField.value,
          passwordField.value,
          locationsField.value,
          userRoleField.value
        );

        if (result.success) {
          closeModal('create-user');
          // Use the createListItem function to add the new user to the list
          createListItem(result.userData, usersList, usersListItem);

          hideLoader(submitButton);
          displaySuccess(result.message);

          form.reset();
        } else {
          hideLoader(submitButton);
          displayError(result.message);
        }
      } catch (error) {
        hideLoader(submitButton);
        displayError(`Error creating user: ${error.message}`);
      }
    });

    // handle open create user modal
    createUserButton.addEventListener('click', () => {
      openModal('create-user');
    });

    // handle reset button click
    resetButton.addEventListener('click', () => {
      form.reset();
    });
  }
};

export const handleUpdateOrgUser = () => {
  const form = getFormByAttribute('update-user');
  const usersComponent = document.querySelector("[data-pfc-item='users-list']");

  if (form && usersComponent) {
    const firstNameField = form.querySelector('[data-pfc-member="firstName"]');
    const lastNameField = form.querySelector('[data-pfc-member="lastName"]');
    const emailField = form.querySelector('[data-pfc-member="email"]');
    const phoneField = form.querySelector('[data-pfc-member="phone"]');
    const locationsField = form.querySelector('[data-pfc-member="locations"]');
    const userRoleField = form.querySelector('[data-pfc-member="userRole"]');
    const idField = form.querySelector('[data-pfc-member="id"]');
    const submitButton = form.querySelector('[type="submit"]');

    const usersList = usersComponent.firstElementChild;
    const usersListItem = usersList.firstElementChild;

    form.addEventListener('submit', async (e) => {
      e.preventDefault();

      try {
        displayLoader(submitButton, 'Updating...');

        const result = await updateOrgUser(
          idField.value,
          firstNameField.value,
          lastNameField.value,
          emailField.value,
          phoneField.value,
          locationsField.value,
          userRoleField.value
        );

        if (result.success) {
          closeModal('update-user');

          updateListItem(result.userData, usersList, usersListItem);

          hideLoader(submitButton);
          displaySuccess(result.message);
        } else {
          hideLoader(submitButton);
          displayError(result.message);
        }
      } catch (error) {
        hideLoader(submitButton);
        displayError(error.message);
      }
    });
  }
};

export const handleDeleteOrgUser = () => {
  const form = getFormByAttribute('delete-user');
  const usersComponent = document.querySelector("[data-pfc-item='users-list']");

  if (form && usersComponent) {
    const idField = form.querySelector('[data-pfc-member="id"]');
    const submitButton = form.querySelector('[type="submit"]');

    form.addEventListener('submit', async (e) => {
      e.preventDefault();

      try {
        displayLoader(submitButton, 'Deleting...');

        const result = await deleteOrgUser(idField.value);

        if (result.success) {
          closeModal('delete-user');

          // delete the users list item
          const userRow = usersComponent.querySelector(`[data-id='${idField.value}']`);
          userRow.remove();

          hideLoader(submitButton);
          displaySuccess('User successfully deleted');
        } else {
          displayError(result.message);
        }
      } catch (error) {
        hideLoader(submitButton);
        displayError(`Error deleting user: ${error}`);
      }
    });
  }
};

export const handleRenderUsers = async () => {
  const usersComponent = document.querySelector("[data-pfc-item='users-list']");
  const totalCount = document.querySelector("[data-element='total-count']");
  const resultCount = document.querySelector("[data-element='result-count']");

  if (usersComponent) {
    const usersList = usersComponent.firstElementChild;
    const usersListItem = usersList.firstElementChild;
    const usersEmpty = usersList.nextElementSibling;
    const usersLoading = usersEmpty.nextElementSibling;

    try {
      const result = await renderUsers();

      if (result.success) {
        // Assuming renderUsers returns an array of user objects
        const { usersData } = result;

        if (usersData.length) {
          // Clear existing list items
          usersList.innerHTML = '';

          // Clone and append list items for each user
          usersData.forEach((user) => {
            createListItem(user, usersList, usersListItem);
          });

          usersList.style.display = 'block';
          usersLoading.style.display = 'none';
        }
        setTotalCount(result.totalSize - 1);
        setVisibleCount(result.visibleSize - 1);

        resultCount.textContent = getVisibleCount();
        totalCount.textContent = getTotalCount(); // account for not showing current user
      } else {
        usersEmpty.style.display = 'block';
        usersLoading.style.display = 'none';
      }
    } catch (error) {
      displayError('Error loading users:', error);
    }
  }
};

export const handleSearchUsers = async () => {
  const usersComponent = document.querySelector("[data-pfc-item='users-list']");

  if (usersComponent) {
    const usersList = usersComponent.firstElementChild;
    const usersListItem = usersList.firstElementChild;
    const usersEmpty = usersList.nextElementSibling;
    const usersLoading = usersEmpty.nextElementSibling;
    const searchBar = document.querySelector("[data-pfc-action='search-users']");

    let delayTimer;

    searchBar.addEventListener('input', async () => {
      clearTimeout(delayTimer);

      delayTimer = setTimeout(async () => {
        try {
          usersList.innerHTML = '';
          usersLoading.style.display = 'block';
          usersEmpty.style.display = 'none';

          const result = await searchUsers(searchBar.value);

          if (result.success) {
            // Assuming renderUsers returns an array of user objects
            const { usersData } = result;

            if (usersData.length) {
              // Clone and append list items for each user
              usersData.forEach((user) => {
                createListItem(user, usersList, usersListItem);
              });

              usersList.style.display = 'block';
              usersLoading.style.display = 'none';
            } else {
              usersList.style.display = 'none';
              usersEmpty.style.display = 'block';
              usersLoading.style.display = 'none';
            }
          } else {
            displayError(`Error loading users: ${result.message}`);
          }
        } catch (error) {
          displayError('Error loading users:', error);
        }
      }, 1000);
    });
  }
};
