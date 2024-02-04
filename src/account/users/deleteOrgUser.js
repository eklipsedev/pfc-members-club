import { updateDoc } from 'firebase/firestore';
import { httpsCallable } from 'firebase/functions';

import { functions } from '../../services/firebase/firebase-config';
import {
  getFromLocalStorage,
  getOrganizationByUserId,
  getUserAndCheckClaims,
  setToLocalStorage,
} from '../../services/firebase/utils';

export const deleteOrgUser = async (userId) => {
  try {
    const { success, user } = await getUserAndCheckClaims('management');

    if (success) {
      try {
        const deleteOrgUserFunction = httpsCallable(functions, 'deleteOrgUser');

        const userData = {
          userId,
        };

        const result = await deleteOrgUserFunction(userData);

        if (result.data.success) {
          // Get organization document based on the user ID
          const { success: orgSuccess, organizationDoc } = await getOrganizationByUserId(user.uid);

          if (orgSuccess) {
            const currentVersion = organizationDoc.data().version || 0;
            const newVersion = currentVersion + 1;

            // Update the organization document with the new version
            await updateDoc(organizationDoc.ref, { version: newVersion });

            // Update local storage with the new version
            setToLocalStorage('organizationVersion', newVersion.toString());

            // Update the organizationUsers array in local storage
            const organizationUsers = (await getFromLocalStorage('organizationUsers')) || [];
            const updatedOrganizationUsers = organizationUsers.filter((user) => user.id !== userId);

            setToLocalStorage('organizationUsers', updatedOrganizationUsers);

            return { success: true, message: result.data.message };
          }
        }
        return { success: false, message: result.data.message };
      } catch (error) {
        return {
          success: false,
          message: "Couldn't successfully call the delete org user function",
        };
      }
    }
  } catch (error) {
    return { success: false, message: error.message };
  }
};
