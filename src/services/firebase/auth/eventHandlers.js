import {
  displayError,
  displayLoader,
  getFormByAttribute,
  hideLoader,
} from '../../../utils/formUtils';
import { logInWithEmail } from './loginWithEmail';
import { logout } from './logout';

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
        displayLoader(submitButton);
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
        displayLoader(logoutLink);
        await logout();
      } catch (error) {
        displayError("Couldn't log the user out");
      }
    });
  }
};
