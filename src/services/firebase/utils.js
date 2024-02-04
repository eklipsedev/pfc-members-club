import { onAuthStateChanged } from 'firebase/auth';
import { doc, getDoc } from 'firebase/firestore';

import { displayError } from '../../utils/formUtils';
import { auth, firestore } from './firebase-config';

let user;
let userId;

// Utility function to get the current user
export const getCurrentUser = () => {
  return new Promise((resolve, reject) => {
    onAuthStateChanged(
      auth,
      (authUser) => {
        if (authUser) {
          user = authUser;
          userId = authUser.uid;
          resolve(user);
        } else {
          localStorage.removeItem('user');
          localStorage.removeItem('userData');
          // redirect to login page, if not already on login page
          if (
            window.location.pathname.startsWith('/members/') &&
            window.location.pathname !== '/login'
          ) {
            window.location.href = '/login';
          }

          console.log('User is not logged in');
        }
      },
      (error) => {
        reject(error); // Reject the promise in case of an error
      }
    );
  });
};

export const getUserAndCheckClaims = async (claimsArray) => {
  try {
    const user = await getCurrentUser();

    if (user) {
      const idTokenResult = await user.getIdTokenResult();
      const userClaims = idTokenResult.claims;

      if (userClaims.userType && userClaims.userType.includes(claimsArray)) {
        return { success: true, user };
      }
    }

    return { success: false, message: 'User is not authenticated' };
  } catch (error) {
    return { success: false, message: error.message };
  }
};

// Utility function to get organization document based on user ID
export const getOrganizationByUserId = async (userId) => {
  try {
    const userDocRef = doc(firestore, 'users', userId);
    const userDocSnapshot = await getDoc(userDocRef);

    if (userDocSnapshot.exists()) {
      const userData = userDocSnapshot.data();

      if ('organizationId' in userData) {
        const organizationDocRef = doc(firestore, 'organizations', userData.organizationId);
        const organizationDocSnapshot = await getDoc(organizationDocRef);

        if (organizationDocSnapshot.exists()) {
          return { success: true, organizationDoc: organizationDocSnapshot };
        }
        return { success: false, message: 'Organization document not found.' };
      }
      return { success: false, message: 'organizationId not found in user document.' };
    }
    return { success: false, message: 'User document not found.' };
  } catch (error) {
    return { success: false, message: error.message };
  }
};

export const getUserDocument = async (userId) => {
  try {
    const userDocRef = getUserDocRef(userId);
    const userSnapshot = await getDoc(userDocRef);

    if (userSnapshot.exists()) {
      return { success: true, userDocument: userSnapshot };
    }

    return { success: false, message: "Couldn't find the users document" };
  } catch (error) {
    return { success: false, message: error.message };
  }
};

export const getUserSavedItems = async (userId) => {
  try {
    const result = await getUserDocument(userId);

    if (result.success) {
      const savedItems = result.userDocument.data().savedItems || [];

      return { success: true, savedItems }; // will be an array
    }
    return { success: false, message: 'There is no saved items array' };
  } catch (error) {
    return { success: false, message: error.message };
  }
};

export const getUserCourses = async (userId) => {
  try {
    const result = await getUserDocument(userId);

    if (result.success) {
      const courses = result.userDocument.data().courses || [];

      return { success: true, courses, userDocRef: result.userDocument.ref }; // will be an array
    }
    return { success: false, message: 'There is no courses array' };
  } catch (error) {
    return { success: false, message: error.message };
  }
};

// local storage utils
export const getFromLocalStorage = (key) => {
  try {
    const storedData = localStorage.getItem(key);
    return storedData ? JSON.parse(storedData) : null;
  } catch (error) {
    console.error(`Error fetching from localStorage (${key}):`, error);
    return null;
  }
};

export const setToLocalStorage = (key, data) => {
  try {
    localStorage.setItem(key, JSON.stringify(data));
  } catch (error) {
    console.error(`Error setting to localStorage (${key}):`, error);
  }
};

export const isAdmin = async () => {
  const tokenResult = await getIdTokenResult();

  if (tokenResult) {
    // Check if the user has the 'admin' claim
    return tokenResult.claims && tokenResult.claims.admin === true;
  }
  // Handle the case when there is no authenticated user
  displayError("You don't have the appropriate permissions to perform this action.");
  return false;
};

export const isNonAdmin = async () => {
  const tokenResult = await getIdTokenResult();

  if (tokenResult) {
    // Check if the user has the 'nonadmin' claim
    return tokenResult.claims && tokenResult.claims.nonadmin === true;
  }
  // Handle the case when there is no authenticated user
  displayError("You don't have the appropriate permissions to perform this action.");
  return false;
};

// Utility function to get the user's document reference in Firestore
export const getUserDocRef = () => {
  if (userId) {
    return doc(firestore, 'users', userId);
  }
  displayError("Couldn't get the user document.");
  return null;
};

export const getUserFromLocalStorage = () => {
  return JSON.parse(localStorage.getItem('user'));
};

export const getUserDataFromLocalStorage = () => {
  return JSON.parse(localStorage.getItem('userData'));
};
