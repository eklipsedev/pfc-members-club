import {
  and,
  collection,
  doc,
  getDoc,
  getDocs,
  limit,
  or,
  orderBy,
  query,
  where,
} from 'firebase/firestore';

import { getUserClaims, getUserData, getUserId } from '../../globals';
import { firestore } from '../../services/firebase/firebase-config';

export const searchUsers = async (searchTerm, page = 1, pageSize = 10) => {
  try {
    const userId = getUserId();
    const userClaims = getUserClaims();
    const { userRole } = userClaims;

    const queryUsers = async (queryFn) => {
      const usersQuery = queryFn();
      const usersSnapshot = await getDocs(usersQuery);

      const usersDataArray = [];

      for (const userDoc of usersSnapshot.docs) {
        if (userDoc.id !== userId) {
          const userDataWithId = {
            userId: userDoc.id,
            ...userDoc.data(),
          };

          // Fetch and attach location data
          const locationPaths = userDataWithId.locations;
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

            userDataWithId.locations = locationDataArray;
          } else {
            userDataWithId.locations = [];
          }
          usersDataArray.push(userDataWithId);
        }
      }

      return { success: true, usersData: usersDataArray };
    };

    const usersCollection = collection(firestore, 'users');

    const handleLocationManager = () => {
      const locationPath = getUserData().locations[0];

      if (searchTerm.length > 0) {
        return queryUsers(() =>
          query(
            usersCollection,
            and(
              where('locations', 'array-contains', locationPath),
              or(
                where('firstName', '==', searchTerm),
                where('lastName', '==', searchTerm),
                where('email', '==', searchTerm)
              )
            ),
            limit(10)
          )
        );
      }

      return queryUsers(() =>
        query(usersCollection, where('locations', 'array-contains', locationPath), limit(10))
      );
    };

    const handleMultiLocationAdmin = () => {
      const locationPaths = getUserData().locations;

      if (searchTerm.length) {
        return queryUsers(() =>
          query(
            usersCollection,
            and(
              where('locations', 'array-contains-any', locationPaths),
              or(
                where('firstName', '==', searchTerm),
                where('lastName', '==', searchTerm),
                where('email', '==', searchTerm)
              )
            ),

            limit(10)
          )
        );
      }
      return queryUsers(() =>
        query(usersCollection, where('locations', 'array-contains-any', locationPaths), limit(10))
      );
    };

    const handleCorporateAdmin = () => {
      if (searchTerm.length > 0) {
        return queryUsers(() =>
          query(
            usersCollection,
            or(
              where('firstName', '==', searchTerm),
              where('lastName', '==', searchTerm),
              where('email', '==', searchTerm)
            ),
            limit(10)
          )
        );
      }
      return queryUsers(() => query(collection(firestore, 'users'), limit(10)));
    };

    switch (userRole) {
      case 'locationManager':
        return handleLocationManager();
      case 'multiLocationAdmin':
        return handleMultiLocationAdmin();
      case 'corporateAdmin':
        return handleCorporateAdmin();
      // Handle other user types if needed
      default:
        return { success: false, message: 'Unsupported user type' };
    }
  } catch (error) {
    return { success: false, message: `Error loading users: ${error}` };
  }
};
