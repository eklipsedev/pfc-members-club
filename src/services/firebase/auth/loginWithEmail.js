import { signInWithEmailAndPassword } from 'firebase/auth';

import { auth } from '../firebase-config';

export const logInWithEmail = async (emailField, passwordField) => {
  try {
    await signInWithEmailAndPassword(auth, emailField.value, passwordField.value);

    return { success: true, message: 'Logged in successfully' };
  } catch (error) {
    return { success: false, message: error };
  }
};

export const togglePasswordVisibility = () => {
  const passwordInputs = document.querySelectorAll('[data-pfc-member*="password"]');

  if (passwordInputs.length) {
    passwordInputs.forEach((passwordInput) => {
      const toggleButton = passwordInput.parentElement.querySelector('[data-toggle-password]');
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
    });
  }
};
