import { getUserData } from '../../globals';
import {
  displayError,
  displayErrorAndHideLoader,
  displayLoader,
  displaySuccess,
  getFormByAttribute,
  hideLoader,
} from '../../utils/formUtils';
import { openModal } from '../../utils/modal';
import { fetchAndAttachLocationData, translateRole } from '../users/utils';
import { saveProfilePic } from './saveProfilePic';
import { updateUserEmail } from './updateEmail';
import { updateUserPassword } from './updatePassword';
import { updateUserProfile } from './updateProfile';

// utility function to get form elements
const getFormElements = (formAttribute) => {
  const form = getFormByAttribute(formAttribute);

  if (!form) return null;

  const firstNameField = form.querySelector('[data-pfc-member="firstName"]');
  const lastNameField = form.querySelector('[data-pfc-member="lastName"]');
  const emailField = form.querySelector('[data-pfc-member="email"]') || null;
  const phoneField = form.querySelector('[data-pfc-member="phone"]');
  const submitButton = form.querySelector('[type="submit"]');

  return { form, firstNameField, lastNameField, emailField, phoneField, submitButton };
};

export const handleSaveProfilePic = () => {
  const uploadPicButton = document.querySelector('[data-pfc-action="upload-profile-image"]');

  if (uploadPicButton) {
    const fileInput = uploadPicButton.nextElementSibling; // should be element right after

    if (fileInput) {
      uploadPicButton.addEventListener('click', () => {
        fileInput.click();
      });

      fileInput.addEventListener('change', async (event) => {
        const file = event.target.files[0];

        try {
          displayLoader(uploadPicButton, 'Uploading...');
          const result = await saveProfilePic(file);

          console.log(result);

          if (result.success) {
            hideLoader(uploadPicButton);
            displaySuccess(result.message);
          } else {
            displayErrorAndHideLoader(uploadPicButton, result.message);
          }
        } catch (error) {
          displayErrorAndHideLoader(uploadPicButton, error.message);
        }
      });
    }
  }
};

export const handleSetProfileData = async () => {
  //const { form, firstNameField, lastNameField, phoneField } = getFormElements('profile');
  const { form, firstNameField, lastNameField, phoneField } = getFormElements('profile') || {};

  if (!form) return;

  // these elements are not inside form but exist on page
  const userRoleElement = document.querySelector('[data-pfc-member="userRole"]');
  const emailElements = document.querySelectorAll('[data-pfc-member="email"]');
  const profilePicElement = document.querySelector('[data-pfc-member="profile-image"]');
  const locationElement = document.querySelector("[data-pfc-member='locations']");

  try {
    const userData = getUserData();

    if (!userData) {
      displayError('No user found');
      return;
    }

    // Set initial values
    firstNameField ? (firstNameField.value = userData.firstName) : '';
    lastNameField ? (lastNameField.value = userData.lastName) : '';
    phoneField ? (phoneField.value = userData.phone ? userData.phone : '') : '';

    const { locations } = userData;

    if (locations && locations.length) {
      const usersLocations = await fetchAndAttachLocationData(locations);

      usersLocations.forEach((location) => {
        const pill = document.createElement('div');
        pill.classList.add('user-table_pill');
        pill.textContent = location.name;
        locationElement.appendChild(pill);
      });
    } else {
      locationElement.textContent = 'No locations set.';
    }

    userRoleElement
      ? (userRoleElement.textContent = translateRole(userData.userRole))
      : (userRoleElement.textContent = 'User does not have a role.');

    if (emailElements.length) {
      emailElements.forEach((element) => {
        if (element instanceof HTMLInputElement) {
          element.value = userData.email;
        } else {
          element.textContent = userData.email;
        }
      });
    }

    const hasProfilePic = userData.photoURL;

    if (profilePicElement) {
      profilePicElement.src = hasProfilePic
        ? userData.photoURL
        : 'https://uploads-ssl.webflow.com/650ef33ce788a656013c96da/6524c70660697f8ca2c9a15d_profile-icon.svg';
    }
  } catch (error) {
    displayError(error.message);
  }
};

export const handleUpdateUserProfile = () => {
  const { form, firstNameField, lastNameField, phoneField, submitButton } =
    getFormElements('profile') || {};

  if (!form) return;

  form.addEventListener('submit', async (e) => {
    e.preventDefault();

    try {
      displayLoader(submitButton, 'Saving...');
      const result = await updateUserProfile(
        firstNameField.value,
        lastNameField.value,
        phoneField.value
      );

      if (result.success) {
        hideLoader(submitButton);
        displaySuccess(result.message);
      } else {
        displayErrorAndHideLoader(submitButton, result.message);
      }
    } catch (error) {
      displayErrorAndHideLoader(submitButton, error.message);
    }
  });
};

export const handleUpdateEmail = () => {
  const { form, emailField, submitButton } = getFormElements('update-email') || {};

  if (!form) return;

  form.addEventListener('submit', async (e) => {
    e.preventDefault();

    try {
      displayLoader(submitButton, 'Confirming...');
      const result = await updateUserEmail(emailField.value);

      if (result.success) {
        hideLoader(submitButton);
        displaySuccess(result.message);
      } else {
        displayErrorAndHideLoader(submitButton, result.message);
      }
    } catch (error) {
      displayErrorAndHideLoader(submitButton, error.message);
    }
  });
};

export const handleUpdatePassword = () => {
  const { form, submitButton } = getFormElements('update-password') || {};

  if (!form) return;

  const currentPasswordField = form.querySelector('[data-pfc-member="current-password"]');
  const newPasswordField = form.querySelector('[data-pfc-member="new-password"]');

  form.addEventListener('submit', async (e) => {
    e.preventDefault();

    try {
      displayLoader(submitButton, 'Updating...');
      const result = await updateUserPassword(currentPasswordField.value, newPasswordField.value);

      if (result.success) {
        hideLoader(submitButton);
        displaySuccess(result.message);
      } else {
        displayErrorAndHideLoader(submitButton, result.message);
      }
    } catch (error) {
      displayErrorAndHideLoader(submitButton, error.message);
    }
  });
};

export const handleOpenChangeEmailModal = () => {
  const changeEmailButton = document.querySelector("[data-pfc-action='change-email']");

  if (changeEmailButton) {
    changeEmailButton.addEventListener('click', () => {
      openModal('change-email');
    });
  }
};

export const handleOpenUpdatePasswordModal = () => {
  const updatePasswordButton = document.querySelector("[data-pfc-action='update-password']");

  if (updatePasswordButton) {
    updatePasswordButton.addEventListener('click', () => {
      openModal('update-password');
    });
  }
};
