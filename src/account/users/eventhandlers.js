import {
  displayError,
  displayLoader,
  displaySuccess,
  getFormByAttribute,
  hideLoader,
} from '../../utils/formUtils';
import { closeModal, openModal } from '../../utils/modal';
import { createOrgUser } from './createOrgUser';
import { deleteOrgUser } from './deleteOrgUser';
import { renderUsers } from './renderUsers';
import { updateOrgUser } from './updateOrgUser';
import { createListItem, updateListItem } from './utils';

export const handleCreateOrgUser = () => {
  const form = getFormByAttribute('create-user');
  const usersComponent = document.querySelector("[data-pfc-item='users-list']");

  if (form && usersComponent) {
    const firstNameField = form.querySelector('[data-pfc-member="firstName"]');
    const lastNameField = form.querySelector('[data-pfc-member="lastName"]');
    const emailField = form.querySelector('[data-pfc-member="email"]');
    const phoneField = form.querySelector('[data-pfc-member="phone"]');
    const passwordField = form.querySelector('[data-pfc-member="password"]');
    const userTypeField = form.querySelector('[data-pfc-member="userType"]');
    const submitButton = form.querySelector('[type="submit"]');
    const resetButton = form.querySelector("[data-pfc-action='reset-form']");
    const createUserButton = document.querySelector("[data-pfc-action='create-user']:is(button)");

    const usersList = usersComponent.firstElementChild;
    const usersListItem = usersList.firstElementChild;

    form.addEventListener('submit', async (e) => {
      e.preventDefault();

      try {
        displayLoader(submitButton);

        const result = await createOrgUser(
          firstNameField.value,
          lastNameField.value,
          emailField.value,
          phoneField.value,
          passwordField.value,
          userTypeField.value
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
    const userTypeField = form.querySelector('[data-pfc-member="userType"]');
    const idField = form.querySelector('[data-pfc-member="id"]');
    const submitButton = form.querySelector('[type="submit"]');

    const usersList = usersComponent.firstElementChild;
    const usersListItem = usersList.firstElementChild;

    form.addEventListener('submit', async (e) => {
      e.preventDefault();

      try {
        displayLoader(submitButton);

        const result = await updateOrgUser(
          idField.value,
          firstNameField.value,
          lastNameField.value,
          emailField.value,
          phoneField.value,
          userTypeField.value
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
        displayLoader(submitButton);

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
      } else {
        displayError(`Error loading users: ${result.message}`);
      }
    } catch (error) {
      displayError('Error loading users:', error);
    }
  }
};
