import { httpsCallable } from 'firebase/functions';

import { functions } from '../../services/firebase/firebase-config';
import { checkPermissions, fetchAndAttachLocationData } from './utils';
import { getUsers, setUsers } from './variables';

export const updateOrgUser = async (
  userId,
  firstName,
  lastName,
  email,
  phone,
  locations,
  userRole
) => {
  try {
    checkPermissions();

    try {
      const updateOrgUserFunction = httpsCallable(functions, 'updateOrgUser');

      const userData = {
        userId,
        firstName,
        lastName,
        email,
        phone,
        locations,
        userRole,
      };

      const result = await updateOrgUserFunction(userData);

      if (!result.data.success) {
        return { success: false, message: result.data.message };
      }

      const resultUserData = result.data.userData;
      const resultUserLocations = resultUserData.locations;

      const unwrappedLocations = await fetchAndAttachLocationData(resultUserLocations);

      resultUserData.locations = unwrappedLocations;

      const users = getUsers();

      const userIndex = users.findIndex((user) => user.userId === userId);

      if (userIndex !== -1) {
        const updatedUser = {
          ...users[userIndex],
          firstName,
          lastName,
          email,
          phone,
          locations: unwrappedLocations,
          userRole,
        };

        users[userIndex] = updatedUser;

        // Set the updated users array
        setUsers([...users]);

        return { success: true, message: result.data.message, userData: resultUserData };
      }
      // Handle case where user is not found
      return { success: false, message: 'User not found in the array' };
    } catch (error) {
      return {
        success: false,
        message: "Couldn't successfully call the update org user function",
      };
    }
  } catch (error) {
    return { success: false, message: error.message };
  }
};
