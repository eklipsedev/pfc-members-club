import { getDoc } from 'firebase/firestore';

import {
  getFromLocalStorage,
  getOrganizationByUserId,
  getUserAndCheckClaims,
  setToLocalStorage,
} from '../../services/firebase/utils';

export const renderUsers = async () => {
  try {
    const { success, user } = await getUserAndCheckClaims('management'); // needs management claims for this action

    if (success) {
      // Get organization document based on the user ID
      const { success: orgSuccess, organizationDoc } = await getOrganizationByUserId(user.uid);

      if (orgSuccess) {
        // Check if the 'users' field exists in the organization document
        if ('users' in organizationDoc.data()) {
          // we have the users Array data
          const usersArray = organizationDoc.data().users || [];

          const { version } = organizationDoc.data(); // will be a number

          let cachedData = await getFromLocalStorage('organizationUsers');
          let cachedVersion = parseInt(getFromLocalStorage('organizationVersion'), 10);

          // Check if local version is outdated or data is not present
          if (!cachedVersion || cachedVersion !== version) {
            const usersDataArray = [];

            // Fetch the data for each document reference in the 'users' array
            for (const userRef of usersArray) {
              const userDocSnapshot = await getDoc(userRef);

              if (userDocSnapshot.exists()) {
                const userData = userDocSnapshot.data();

                // Check if the user being processed is not the current user
                if (userDocSnapshot.id !== user.uid) {
                  // Include the user ID in the userData object
                  const userDataWithId = {
                    id: userDocSnapshot.id,
                    ...userData,
                  };

                  // Push the modified userData object into usersDataArray
                  usersDataArray.push(userDataWithId);
                }
              }
            }

            setToLocalStorage('organizationUsers', usersDataArray);
            setToLocalStorage('organizationVersion', version);

            return { success: true, usersData: usersDataArray };
          }
          // Use data from local storage if version hasn't changed
          return { success: true, usersData: cachedData };
        }
        return {
          success: false,
          message: "'users' field not found in organization document.",
        };
      }
    }
  } catch (error) {
    return { success: false, message: `Error loading users: ${error.message}` };
  }
};
