import { getUserData } from '../../globals';
import {
  displayError,
  displayLoader,
  displaySuccess,
  getFormByAttribute,
  hideLoader,
} from '../../utils/formUtils';
import { openModal } from '../../utils/modal';
import { translateRole } from '../users/utils';
import { saveProfilePic } from './saveProfilePic';
import { updateUserEmail } from './updateEmail';
import { updateUserPassword } from './updatePassword';
import { updateUserProfile } from './updateProfile';

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

          if (result.success) {
            hideLoader(uploadPicButton);
            displaySuccess(result.message);
          } else {
            hideLoader(uploadPicButton);
            displayError(result.message);
          }
        } catch (error) {
          hideLoader(uploadPicButton);
          displayError(error.message);
        }
      });
    }
  }
};

export const handleSetProfileData = async () => {
  const form = getFormByAttribute('profile');

  if (form) {
    // checking for existence of profile form will also validate email & userType element existing
    const firstNameField = form.querySelector('[data-pfc-member="firstName"]');
    const lastNameField = form.querySelector('[data-pfc-member="lastName"]');
    const phoneField = form.querySelector('[data-pfc-member="phone"]');
    // these elements are not inside form but exist on page
    const userRoleElement = document.querySelector('[data-pfc-member="userRole"]');
    const emailElements = document.querySelectorAll('[data-pfc-member="email"]');
    const profilePicElement = document.querySelector('[data-pfc-member="profile-image"]');

    try {
      const userData = getUserData();

      if (userData) {
        // Set initial values
        firstNameField ? (firstNameField.value = userData.firstName) : '';
        lastNameField ? (lastNameField.value = userData.lastName) : '';
        phoneField ? (phoneField.value = userData.phone ? userData.phone : '') : '';
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

        const hasProfilePic = userData.photoURL !== null;

        if (profilePicElement) {
          profilePicElement.src = hasProfilePic
            ? userData.photoURL
            : 'https://uploads-ssl.webflow.com/650ef33ce788a656013c96da/6524c70660697f8ca2c9a15d_profile-icon.svg';
        }
      } else {
        displayError('No user found');
      }
    } catch (error) {
      displayError(error.message);
    }
  }
};

export const handleUpdateUserProfile = () => {
  const form = getFormByAttribute('profile');

  // Check if the profile form exists on the current page
  if (form) {
    const firstNameField = form.querySelector('[data-pfc-member="firstName"]');
    const lastNameField = form.querySelector('[data-pfc-member="lastName"]');
    const phoneField = form.querySelector('[data-pfc-member="phone"]');
    const submitButton = form.querySelector('[type="submit"]');

    form.addEventListener('submit', async (e) => {
      e.preventDefault();

      try {
        displayLoader(submitButton, 'Saving...');
        const result = await updateUserProfile(firstNameField, lastNameField, phoneField);

        if (result.success) {
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

export const handleUpdateEmail = () => {
  const form = getFormByAttribute('update-email');

  // Check if the profile form exists on the current page
  if (form) {
    const emailField = form.querySelector('[data-pfc-member="email"]');
    const submitButton = form.querySelector('[type="submit"]');

    form.addEventListener('submit', async (e) => {
      e.preventDefault();

      try {
        displayLoader(submitButton, 'Confirming...');
        const result = await updateUserEmail(emailField);

        if (result.success) {
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

export const handleUpdatePassword = () => {
  const form = getFormByAttribute('update-password');

  // Check if the profile form exists on the current page
  if (form) {
    const currentPasswordField = form.querySelector('[data-pfc-member="current-password"]');
    const newPasswordField = form.querySelector('[data-pfc-member="new-password"]');
    const submitButton = form.querySelector('[type="submit"]');

    form.addEventListener('submit', async (e) => {
      e.preventDefault();

      try {
        displayLoader(submitButton, 'Updating...');
        const result = await updateUserPassword(currentPasswordField, newPasswordField);

        if (result.success) {
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
