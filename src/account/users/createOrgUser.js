import { updateDoc } from 'firebase/firestore';
import { httpsCallable } from 'firebase/functions';

import { functions } from '../../services/firebase/firebase-config';
import {
  getFromLocalStorage,
  getOrganizationByUserId,
  getUserAndCheckClaims,
  setToLocalStorage,
} from '../../services/firebase/utils';

export const createOrgUser = async (firstName, lastName, email, phone, password, userType) => {
  try {
    const { success, user } = await getUserAndCheckClaims('management'); // needs management claims for this action

    if (success) {
      try {
        const createOrgUserFunction = httpsCallable(functions, 'createOrgUser');

        const userData = {
          firstName,
          lastName,
          email,
          phone,
          password,
          userType,
        };

        const result = await createOrgUserFunction(userData);

        if (result.data.success) {
          // Get organization document based on the user ID
          const { success: orgSuccess, organizationDoc } = await getOrganizationByUserId(user.uid);

          if (orgSuccess) {
            // Increment the version for the organization document
            const currentVersion = organizationDoc.data().version || 0;
            const newVersion = currentVersion + 1;

            // Update the organization document with the new version
            await updateDoc(organizationDoc.ref, { version: newVersion });

            // Update local storage with the new version
            setToLocalStorage('organizationVersion', newVersion.toString());

            const organizationUsers = await getFromLocalStorage('organizationUsers');

            if (organizationUsers) {
              organizationUsers.push(result.data.userData);

              setToLocalStorage('organizationUsers', organizationUsers);
            }

            return { success: true, userData: userData, message: result.data.message };
          }
          return { success: false, message: 'Failed to get organization document.' };
        }
        return { success: false, message: result.data.message };
      } catch (error) {
        return {
          success: false,
          message: "Couldn't successfully call the create org user function",
        };
      }
    }

    return { success: false, message: 'User is not authenticated' };
  } catch (error) {
    return { success: false, message: error.message };
  }
};
