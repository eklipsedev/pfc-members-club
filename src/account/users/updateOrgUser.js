import { httpsCallable } from 'firebase/functions';

import { functions } from '../../services/firebase/firebase-config';
import { getUserAndCheckClaims } from '../../services/firebase/utils';

export const updateOrgUser = async (userId, firstName, lastName, email, phone, userType) => {
  try {
    const { success } = await getUserAndCheckClaims('management'); // needs management claims for this action

    if (success) {
      try {
        const updateOrgUserFunction = httpsCallable(functions, 'updateOrgUser');

        const userData = {
          userId,
          firstName,
          lastName,
          email,
          phone,
          userType,
        };

        const result = await updateOrgUserFunction(userData);

        if (result.data.success) {
          return { success: true, userData: userData, message: result.data.message };
        }
        return { success: false, message: result.data.message };
      } catch (error) {
        return {
          success: false,
          message: "Couldn't successfully call the update org user function",
        };
      }
    }
  } catch (error) {
    return { success: false, message: error.message };
  }
};
