import { signInWithEmailAndPassword } from 'firebase/auth';

import { auth } from '../firebase-config';
import { getUserDocument, setToLocalStorage } from '../utils';

export const logInWithEmail = async (emailField, passwordField) => {
  try {
    // Sign in with email and password
    const userCredential = await signInWithEmailAndPassword(
      auth,
      emailField.value,
      passwordField.value
    );

    const userId = userCredential.user.uid;

    const userResult = await getUserDocument(userId);

    if (userResult.success) {
      setToLocalStorage('user', userCredential.user);
      setToLocalStorage('userData', userResult.userDocument.data());

      return { success: true };
    }
  } catch (error) {
    // Hide loader and display error message
    return { success: false, message: error.message };
  }
};

export const togglePasswordVisibility = () => {
  const passwordInput = document.querySelector('[data-pfc-member="password"]');
  const toggleButton = document.querySelector('[data-toggle-password]');

  if (passwordInput && toggleButton) {
    const hidePasswordIcon = toggleButton.children[0];
    const showPasswordIcon = toggleButton.children[1];

    toggleButton.addEventListener('click', () => {
      passwordInput.type = passwordInput.type === 'password' ? 'text' : 'password';

      if (passwordInput.type === 'password') {
        hidePasswordIcon.style.display = 'block';
        showPasswordIcon.style.display = 'none';
      } else {
        hidePasswordIcon.style.display = 'none';
        showPasswordIcon.style.display = 'block';
      }
    });
  }
};
