/* eslint-disable prefer-destructuring */
import { getUserClaims, getUserData } from '../../globals';
import {
  displayError,
  displayErrorAndHideLoader,
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
import { updateListItem } from './updateListItem';
import { updateOrgUser } from './updateOrgUser';
import { getTotalCount, getVisibleCount, setUsers } from './variables';

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

    if (isManager && managerLocation)
      locationsField.value = managerLocation.replace('locations/', '');

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
          displayErrorAndHideLoader(submitButton, result.message);
        }
      } catch (error) {
        displayErrorAndHideLoader(submitButton, error.message);
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
          displayErrorAndHideLoader(submitButton, result.message);
        }
      } catch (error) {
        displayErrorAndHideLoader(submitButton, error.message);
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
          displayErrorAndHideLoader(submitButton, result.message);
        }
      } catch (error) {
        displayErrorAndHideLoader(submitButton, error.message);
      }
    });
  }
};

export const handleRenderUsers = async () => {
  const usersComponent = document.querySelector("[data-pfc-item='users-list']");
  const totalCount = document.querySelector("[data-element='total-count']");
  const resultCount = document.querySelector("[data-element='result-count']");
  const paginationElement = document.querySelector("[data-element='pagination']");

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
            createListItem(user, usersList, usersListItem, 'add');
          });

          setUsers(usersData);

          usersList.style.display = 'block';
          usersLoading.style.display = 'none';

          if (result.hasMore) {
            paginationElement.style.display = 'flex';
          }
        }
        resultCount.textContent = getVisibleCount();
        totalCount.textContent = getTotalCount(); // account for not showing current user
      } else {
        usersEmpty.style.display = 'block';
        usersLoading.style.display = 'none';
      }
    } catch (error) {
      displayError(error.message);
    }
  }
};

export const handleLoadMoreUsers = async () => {
  const usersComponent = document.querySelector("[data-pfc-item='users-list']");
  const resultCount = document.querySelector("[data-element='result-count']");
  const paginationElement = document.querySelector("[data-element='pagination']");

  if (usersComponent && paginationElement) {
    const loadMoreButton = paginationElement.firstChild;
    const usersList = usersComponent.firstElementChild;
    const usersListItem = usersList.firstElementChild;
    const usersEmpty = usersList.nextElementSibling;
    const usersLoading = usersEmpty.nextElementSibling;

    loadMoreButton.addEventListener('click', async () => {
      try {
        displayLoader(loadMoreButton, 'Loading...');

        const result = await renderUsers();

        if (result.success) {
          // Assuming renderUsers returns an array of user objects
          const { usersData } = result;

          if (usersData.length) {
            usersData.forEach((user) => {
              createListItem(user, usersList, usersListItem, 'add');
            });

            usersList.style.display = 'block';
            usersLoading.style.display = 'none';
          }

          if (!result.hasMore) {
            paginationElement.style.display = 'none';
          } else {
            paginationElement.style.display = 'flex';
          }

          resultCount.textContent = getVisibleCount();

          hideLoader(loadMoreButton);
        } else {
          usersEmpty.style.display = 'block';
          usersLoading.style.display = 'none';
        }
      } catch (error) {
        displayError(error.message);
      }
    });
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
    const totalCount = document.querySelector("[data-element='total-count']");
    const resultCount = document.querySelector("[data-element='result-count']");
    const paginationElement = document.querySelector("[data-element='pagination']");

    let delayTimer;

    searchBar.addEventListener('input', async () => {
      clearTimeout(delayTimer);

      delayTimer = setTimeout(async () => {
        try {
          usersList.innerHTML = '';
          usersLoading.style.display = 'block';
          usersEmpty.style.display = 'none';
          paginationElement.style.display = 'none';

          let result;

          if (searchBar.value.length > 0) {
            result = await renderUsers(searchBar.value, 'search');
          } else {
            result = await renderUsers(null, 'search');
          }

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

            if (!result.hasMore) {
              paginationElement.style.display = 'none';
            } else {
              paginationElement.style.display = 'flex';
            }

            totalCount.textContent = getTotalCount();
            resultCount.textContent = getVisibleCount();
          } else {
            displayError(result.message);
          }
        } catch (error) {
          displayError(error.message);
        }
      }, 1000);
    });
  }
};
