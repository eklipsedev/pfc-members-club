import {
  displayErrorAndHideLoader,
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

  if (!form) return;

  const emailField = form.querySelector('[data-pfc-member="email"]');
  const passwordField = form.querySelector('[data-pfc-member="password"]');
  const submitButton = form.querySelector('[type="submit"]');

  form.addEventListener('submit', async (e) => {
    e.preventDefault();

    try {
      displayLoader(submitButton, 'Loading...');
      const result = await logInWithEmail(emailField.value, passwordField.value);

      if (result.success) {
        // Redirect to dashboard on successful login
        window.location.href = '/members/home';
      } else {
        displayErrorAndHideLoader(submitButton, result.message);
      }
    } catch (error) {
      displayErrorAndHideLoader(submitButton, error.message);
    }
  });
};

// handle logout
export const handleLogoutClick = async () => {
  const logoutLink = document.querySelector('[data-pfc-action="logout"]');

  if (!logoutLink) return;

  logoutLink.addEventListener('click', async (e) => {
    e.preventDefault();

    try {
      displayLoader(logoutLink, 'Logging Out...');
      const result = await logout();

      if (result.success) {
        window.location.href = '/?logout=true';
      } else {
        displayErrorAndHideLoader(logoutLink, result.message);
      }
    } catch (error) {
      displayErrorAndHideLoader(logoutLink, error.message);
    }
  });
};

// handle forgot password
export const handleForgotPassword = async () => {
  const form = getFormByAttribute('forgot-password');

  if (!form) return;

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
        displayErrorAndHideLoader(submitButton, result.message);
      }
    } catch (error) {
      displayErrorAndHideLoader(submitButton, error.message);
    }
  });
};

// handle reset password
export const handleResetPassword = async () => {
  const form = getFormByAttribute('reset-password');

  if (!form) return;

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
        displayErrorAndHideLoader(submitButton, result.message);
      }
    } catch (error) {
      displayErrorAndHideLoader(submitButton, error.message);
    }
  });
};
