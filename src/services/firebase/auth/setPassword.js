import {
  displayError,
  displayLoader,
  displaySuccess,
  getFormByAttribute,
  hideLoader,
} from '../../../utils/formUtils';
import { auth } from '../firebase-config';

export const resetPassword = () => {
  const form = getFormByAttribute('reset-password');

  // Check if the reset password form exists on the current page
  if (form) {
    const passwordField = form.querySelector('[data-pfc-member="password"]');
    const submitButton = form.querySelector('[type="submit"]');

    form.addEventListener('submit', async (e) => {
      e.preventDefault();

      // Display loader when the form is submitted
      displayLoader(submitButton);

      try {
        // Get the action code from the URL
        const actionCode = new URLSearchParams(window.location.search).get('oobCode');

        // Check if the action code is present
        if (actionCode) {
          // Reset the user's password with the provided action code
          await auth.auth().confirmPasswordReset(actionCode, passwordField.value);

          // Optionally, display a success message
          displaySuccess({ message: 'Password reset successful!' });
        } else {
          // Handle the case where the action code is missing or invalid
          console.error('Invalid or missing action code');
        }
      } catch (error) {
        // Handle password reset failure
        console.error(error);

        // Hide loader and display error message
        hideLoader(submitButton);
        displayError(form, error);
      }
    });
  }
};
