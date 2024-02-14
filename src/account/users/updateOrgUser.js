import { doc, getDoc } from 'firebase/firestore';
import { httpsCallable } from 'firebase/functions';

import { getUserClaims } from '../../globals';
import { firestore, functions } from '../../services/firebase/firebase-config';
import { updateUserById } from './variables';

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
    const userClaims = getUserClaims();
    const currentUserRole = userClaims.userRole;
    const canUpdateUser =
      currentUserRole === 'corporateAdmin' ||
      currentUserRole === 'multiLocationAdmin' ||
      currentUserRole === 'locationManager';

    if (canUpdateUser) {
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

        console.log(userData);

        const result = await updateOrgUserFunction(userData);

        console.log(result);

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

            //const users = getUsers();

            updateUserById(resultUserData.userId, resultUserData);

            return { success: true, message: result.data.message, userData: resultUserData };
          }
          resultUserData.locations = [];

          return { success: true, userData: result.data.userData, message: result.data.message };
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
