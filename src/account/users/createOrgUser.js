import { doc, getDoc } from 'firebase/firestore';
import { httpsCallable } from 'firebase/functions';

import { getUserClaims } from '../../globals';
import { firestore, functions } from '../../services/firebase/firebase-config';
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
    const userClaims = getUserClaims();
    const currentUserRole = userClaims.userRole;
    const canCreateUser =
      currentUserRole === 'corporateAdmin' ||
      currentUserRole === 'multiLocationAdmin' ||
      currentUserRole === 'locationManager';

    if (canCreateUser) {
      try {
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

        if (result.data.success) {
          let resultUserData = result.data.userData;
          // Fetch and attach location data
          const locationPaths = resultUserData.locations;
          const locationDataArray = [];

          if (locationPaths && locationPaths.length) {
            for (const locationPath of locationPaths) {
              const locationRef = doc(firestore, locationPath);
              const locationDoc = await getDoc(locationRef);

              if (locationDoc.exists()) {
                const locationData = locationDoc.data();
                locationData.id = locationDoc.id;
                locationDataArray.push(locationData);
              } else {
                console.error(`Location document not found for reference: ${locationRef.id}`);
              }
            }

            resultUserData.locations = locationDataArray;

            const users = getUsers();

            setUsers(users.concat(resultUserData));

            return { success: true, message: result.data.message, userData: resultUserData };
          }
          resultUserData.locations = [];
        }
        return { success: false, message: result.data.message };
      } catch (error) {
        return {
          success: false,
          message: "Couldn't successfully call the create org user function",
        };
      }
    }

    return { success: false, message: 'User does not have appropriate permissions' };
  } catch (error) {
    return { success: false, message: error.message };
  }
};
