import { httpsCallable } from 'firebase/functions';

import { functions } from '../../services/firebase/firebase-config';
import { checkPermissions, fetchAndAttachLocationData } from './utils';
import { getUsers, setUsers } from './variables';

export const createOrgUser = async (
  firstName,
  lastName,
  email,
  phone,
  password,
  locations,
  userRole
) => {
  try {
    checkPermissions();

    const createOrgUserFunction = httpsCallable(functions, 'createOrgUser');

    const userData = {
      firstName,
      lastName,
      email,
      phone,
      password,
      locations,
      userRole,
    };

    const result = await createOrgUserFunction(userData);

    if (!result.data.success) {
      return { success: false, message: result.data.message };
    }

    const resultUserData = result.data.userData;
    const resultUserLocations = resultUserData.locations;

    const unwrappedLocations = await fetchAndAttachLocationData(resultUserLocations);

    resultUserData.locations = unwrappedLocations;

    const users = getUsers();
    setUsers(users.concat(resultUserData));

    return {
      success: true,
      message: result.data.message,
      userData: resultUserData,
    };
  } catch (error) {
    return { success: false, message: error.message };
  }
};
