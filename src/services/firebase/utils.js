import { onAuthStateChanged } from 'firebase/auth';
import { doc, getDoc } from 'firebase/firestore';

import {
  getUserClaims,
  getUserId,
  setUser,
  setUserClaims,
  setUserData,
  setUserId,
  setUserToken,
} from '../../globals';
import { displayError } from '../../utils/formUtils';
import { auth, firestore } from './firebase-config';

// Utility function to get the current user
export const getCurrentUser = () => {
  return new Promise(async (resolve, reject) => {
    const unsubscribe = onAuthStateChanged(
      auth,
      async (authUser) => {
        try {
          if (authUser) {
            const idTokenResult = await authUser.getIdTokenResult();
            const userClaims = idTokenResult.claims;

            if (authUser.uid) {
              const userResult = await getUserDocument(authUser.uid);
              const userData = userResult.userDocument.data();

              userData.photoURL = authUser.photoURL;

              if (userResult.success) {
                setToLocalStorage('userId', authUser.uid);
                setToLocalStorage('userToken', idTokenResult.token);
                setToLocalStorage('userData', userData);

                setUser(authUser);
                setUserId(authUser.uid);
                setUserToken(idTokenResult.token);
                setUserData(userData);
                setUserClaims(userClaims);

                // Resolve with a custom object containing both authUser and additional data
                resolve({ authUser, userData });
                return;
              }

              // If the user is already in local storage, resolve with authUser only
              resolve({ authUser });
              return authUser;
            }
          } else {
            // Now check local storage and resolve
            const storedToken = localStorage.getItem('userToken');
            handleUnauthenticatedUser();
            resolve(storedToken ? { authUser: null, storedToken } : null);
          }
        } catch (error) {
          reject(error);
        } finally {
          // Unsubscribe to avoid memory leaks
          unsubscribe();
        }
      },
      (error) => {
        reject(error);
      }
    );
  });
};

export const localStorageStuff = () => {
  const userId = getFromLocalStorage('userId');
  const userToken = getFromLocalStorage('userToken');
  const userData = getFromLocalStorage('userData');

  if (userId && userToken && userData) {
    // Reconstruct and return the user object
    return {
      uid: userId,
      token: userToken,
      data: userData,
    };
  }
  return null; // Return null if any of the necessary information is missing
};

const handleUnauthenticatedUser = () => {
  if (window.location.pathname.startsWith('/members/') && window.location.pathname !== '/login') {
    window.location.href = '/login';
  }

  localStorage.clear();
};

export const handleAuthElements = () => {
  const authElements = document.querySelectorAll('[data-pfc-content]');
  const userId = getUserId();
  const userClaims = userId ? getUserClaims() : null;

  if (authElements && authElements.length) {
    authElements.forEach((element) => {
      const requiredAccessLevel = element.getAttribute('data-pfc-content');

      if (userId) {
        // User is logged in, check permissions using pre-fetched user claims
        const currentUserRole = userClaims.userRole;

        if (!hasAccess(currentUserRole, requiredAccessLevel) && requiredAccessLevel !== 'members') {
          element.remove();
        } else {
          element.style.display = 'block';
        }
      } else {
        // User is logged out
        if (requiredAccessLevel.startsWith('!members')) {
          element.style.display = 'block';
        } else {
          element.remove();
        }
      }
    });
  }
};

// Function to check if the user has access based on their role
export const hasAccess = (userRole, requiredAccessLevel) => {
  if (requiredAccessLevel === 'corporateAdmin' && userRole === 'corporateAdmin') {
    return true; // CorporateAdmin has access to corporateAdmin content
  }
  if (
    requiredAccessLevel === 'multiLocationAdmin' &&
    (userRole === 'multiLocationAdmin' || userRole === 'corporateAdmin')
  ) {
    return true; // MultiLocationAdmin has access to multiLocationAdmin content and corporateAdmin content
  }
  if (
    requiredAccessLevel === 'locationManager' &&
    (userRole === 'locationManager' ||
      userRole === 'multiLocationAdmin' ||
      userRole === 'corporateAdmin')
  ) {
    return true; // LocationManager has access to locationManager content, multiLocationAdmin content, and corporateAdmin content
  }
  if (requiredAccessLevel === 'staff') {
    return true; // Staff is accessible to everyone
  }
  return false; // Default to deny access
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

// Utility function to get the user's document reference in Firestore
export const getUserDocRef = (userId) => {
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
