import { getCurrentUser } from '../utils';

export const handleAuthListener = async () => {
  const user = getCurrentUser();
  // Iterate through elements with data-pfc-content attribute
  const authElements = document.querySelectorAll('[data-pfc-content]');
  authElements.forEach((element) => {
    const authType = element.getAttribute('data-pfc-content');

    // Set visibility based on authentication state and content visibility attribute
    if ((user && authType === 'members') || (!user && authType === '!members')) {
      element.style.display = 'block';
    } else {
      element.remove(); // remove element if user is not supposed to see it
    }
  });
};
