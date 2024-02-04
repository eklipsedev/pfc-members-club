import { signOut } from 'firebase/auth';

import { displaySuccess } from '../../../utils/formUtils';
import { auth } from '../firebase-config';
import { getCurrentUser } from '../utils';

export const logout = async () => {
  try {
    const user = await getCurrentUser();

    if (user) {
      await signOut(auth);

      localStorage.clear();

      window.location.href = '/?logout=true';
    }
  } catch (error) {
    return { success: false, message: error.message };
  }
};

export const showLogoutMessage = () => {
  // Check for the presence of the 'logout' parameter
  const urlParams = new URLSearchParams(window.location.search);
  const isLogout = urlParams.get('logout');

  // Display success message if the 'logout' parameter is present
  if (isLogout === 'true') {
    displaySuccess("You've been successfully logged out.");

    // Remove the 'logout' parameter after a delay
    setTimeout(() => {
      // Update the URL to remove the 'logout' parameter
      urlParams.delete('logout');

      // Update the URL in the browser without triggering a page reload
      const url = new URL(window.location.href);
      url.search = urlParams.toString();
      window.history.replaceState({}, document.title, url.href);
    }, 5400); // Adjust the delay as needed
  }
};
