import { sendPasswordResetEmail } from 'firebase/auth';

import {
  displayError,
  displayLoader,
  displaySuccess,
  getFormByAttribute,
  hideLoader,
} from '../../../utils/formUtils';
import { auth } from '../firebase-config';

export const forgotPassword = () => {
  const form = getFormByAttribute('forgot-password');

  // Check if the reset password form exists on the current page
  if (form) {
    const emailField = form.querySelector('[data-pfc-member="email"]');
    const submitButton = form.querySelector('[type="submit"]');

    form.addEventListener('submit', async (e) => {
      e.preventDefault();

      // Display loader when the form is submitted
      displayLoader(submitButton);

      try {
        // Send password reset email
        const result = await sendPasswordResetEmail(auth, emailField.value);

        if (result.success) {
          hideLoader(submitButton);
          emailField.value = '';
          displaySuccess(result.message);
        } else {
          hideLoader(submitButton);
          displayError(result.message);
        }
      } catch (error) {
        // Hide loader and display error message
        hideLoader(submitButton);
        displayError(error.message);
      }
    });
  }
};
