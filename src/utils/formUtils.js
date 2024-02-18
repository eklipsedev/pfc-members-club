export const getFormByAttribute = (attributeValue) => {
  return document.querySelector(`[data-pfc-form="${attributeValue}"]`);
};

let buttonText = '';

export const displayLoader = (button, loadingText) => {
  const textElement = button.querySelector("[data-element='text']");
  const loader = textElement.nextSibling;

  loader.style.display = 'flex';

  buttonText = textElement.textContent;

  if (loadingText) {
    textElement.textContent = loadingText;
  }
};

export const hideLoader = (button) => {
  const textElement = button.querySelector("[data-element='text']");
  const loader = textElement.nextSibling;

  loader.style.display = 'none';

  textElement.textContent = buttonText;
};

// translate the default ugly Firebase error messages
const translateFirebaseError = (errorCode, customMessage = null) => {
  // if there's a custom message, return right away
  if (customMessage) {
    return customMessage;
  }

  switch (errorCode) {
    case 'auth/user-not-found':
      return 'User not found. Please check your email or register for an account.';
    case 'auth/wrong-password':
      return 'Incorrect password. Please try again.';
    case 'auth/invalid-email':
      return 'Invalid email address. Please enter a valid email.';
    case 'auth/email-already-in-use':
      return 'Email already in use. Please use a different email or sign in.';
    case 'auth/weak-password':
      return 'Weak password. Please choose a stronger password.';
    case 'auth/too-many-requests':
      return 'Too many unsuccessful login attempts. Try again later.';
    case 'auth/operation-not-allowed':
      return 'This operation is not allowed. Please contact support.';
    case 'auth/user-disabled':
      return 'Your account has been disabled. Please contact support.';
    case 'firestore/permission-denied':
      return 'You have missing or insufficient permissions.';
    // Add more cases for other Firebase error codes as needed
    default:
      return `Firebase error: ${errorCode}`;
  }
};

const displayMessage = (elementSelector, message) => {
  const messageElement = document.querySelector(elementSelector);
  const contentElement = messageElement.children[1];
  const closeButton = messageElement.children[2];

  // Set the message content
  contentElement.innerText = message;

  // Display the message element
  messageElement.style.display = 'flex';
  setTimeout(() => {
    messageElement.classList.add('is-visible');
  }, 100); // added delay because it wasn't working without one

  // Hide the element after 5 seconds
  setTimeout(() => {
    messageElement.classList.remove('is-visible');
    setTimeout(() => {
      messageElement.style.display = 'none';
    }, 300);
  }, 5000);

  // Event listener to hide the element if closed
  closeButton.addEventListener('click', () => {
    messageElement.classList.remove('is-visible');
    setTimeout(() => {
      messageElement.style.display = 'none';
    }, 300);
  });
};

export const displayError = (error) => {
  if (!error) {
    // Handle the case where no error object is provided
    console.error('Invalid or missing error object:', error);
    // Display a generic error message or handle it in a way that makes sense for your application
    displayMessage('[data-pfc-error]', 'An unexpected error occurred.');
    return;
  }

  if (error.code) {
    // Case where error code is provided
    const errorCode = error.code;
    const translatedErrorMessage = translateFirebaseError(errorCode);
    displayMessage('[data-pfc-error]', translatedErrorMessage);
  } else {
    // Case where only a custom message is provided
    displayMessage('[data-pfc-error]', error);
  }
};

export const displaySuccess = (message) => {
  displayMessage('[data-pfc-success]', message);
};

export const displayErrorAndHideLoader = (submitButton, errorMessage) => {
  hideLoader(submitButton);
  displayError(errorMessage);
};
