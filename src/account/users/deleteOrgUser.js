import { httpsCallable } from 'firebase/functions';

import { getUserClaims } from '../../globals';
import { functions } from '../../services/firebase/firebase-config';

export const deleteOrgUser = async (userToDeleteId) => {
  try {
    const userClaims = getUserClaims();
    const currentUserRole = userClaims.userRole;
    const canDeleteUser =
      currentUserRole === 'corporateAdmin' ||
      currentUserRole === 'multiLocationAdmin' ||
      currentUserRole === 'locationManager';

    if (canDeleteUser) {
      try {
        const deleteOrgUserFunction = httpsCallable(functions, 'deleteOrgUser');

        const userData = {
          userId: userToDeleteId,
        };

        const result = await deleteOrgUserFunction(userData);

        console.log(result);

        if (result.data.success) {
          return { success: true, message: result.data.message };
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
