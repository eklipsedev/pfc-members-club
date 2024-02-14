import {
  displayError,
  displayLoader,
  displaySuccess,
  getFormByAttribute,
  hideLoader,
} from '../../../utils/formUtils';
import { forgotPassword } from './forgotPassword';
import { logInWithEmail } from './loginWithEmail';
import { logout } from './logout';
import { resetPassword } from './resetPassword';

// handle email login
export const handleLoginClick = async () => {
  const form = getFormByAttribute('login');

  if (form) {
    const emailField = form.querySelector('[data-pfc-member="email"]');
    const passwordField = form.querySelector('[data-pfc-member="password"]');
    const submitButton = form.querySelector('[type="submit"]');

    form.addEventListener('submit', async (e) => {
      e.preventDefault();

      try {
        displayLoader(submitButton, 'Loading...');
        const result = await logInWithEmail(emailField, passwordField, submitButton);

        if (result.success) {
          // Redirect to dashboard on successful login
          window.location.href = '/members/home';
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

// handle logout
export const handleLogoutClick = async () => {
  const logoutLink = document.querySelector('[data-pfc-action="logout"]');

  if (logoutLink) {
    logoutLink.addEventListener('click', async (e) => {
      e.preventDefault();

      try {
        displayLoader(logoutLink, 'Logging Out...');
        const result = await logout();

        if (result.success) {
          window.location.href = '/?logout=true';
        } else {
          hideLoader(logoutLink);
          displayError(result.message);
        }
      } catch (error) {
        hideLoader(logoutLink);
        displayError("Couldn't log the user out");
      }
    });
  }
};

// handle forgot password
export const handleForgotPassword = async () => {
  const form = getFormByAttribute('forgot-password');

  // Check if the reset password form exists on the current page
  if (form) {
    const emailField = form.querySelector('[data-pfc-member="email"]');
    const submitButton = form.querySelector('[type="submit"]');

    form.addEventListener('submit', async (e) => {
      e.preventDefault();

      try {
        displayLoader(submitButton, 'Sending...');
        // Send password reset email
        const result = await forgotPassword(emailField.value);

        if (result.success) {
          hideLoader(submitButton);
          emailField.value = '';
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

// handle reset password
export const handleResetPassword = async () => {
  const form = getFormByAttribute('reset-password');

  // Check if the reset password form exists on the current page
  if (form) {
    const passwordField = form.querySelector('[data-pfc-member="password"]');
    const submitButton = form.querySelector('[type="submit"]');

    form.addEventListener('submit', async (e) => {
      e.preventDefault();

      try {
        displayLoader(submitButton, 'Resetting...');

        const result = await resetPassword(passwordField.value);

        if (result.success) {
          // redirect to password set page
          window.location.href = '/password-set';
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
