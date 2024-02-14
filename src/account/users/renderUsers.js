import { collection, doc, getDoc, getDocs, limit, orderBy, query, where } from 'firebase/firestore';

import { getUserClaims, getUserData, getUserId } from '../../globals';
import { firestore } from '../../services/firebase/firebase-config';
import { addLocation, getUsers, setUsers } from './variables';

export const renderUsers = async (inputValue = null, page = 1, pageSize = 10) => {
  try {
    const userId = getUserId();
    const userClaims = getUserClaims();
    const { userRole } = userClaims;

    const usersCollection = collection(firestore, 'users');

    const queryUsers = async (queryFn, totalSize) => {
      const usersQuery = queryFn();
      const usersSnapshot = await getDocs(usersQuery);
      const visibleSize = usersSnapshot.size;

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

      console.log(usersDataArray);

      const users = getUsers();

      setUsers(usersDataArray);

      console.log(getUsers());

      return { success: true, usersData: usersDataArray, totalSize, visibleSize };
    };

    // query for location manager
    const handleLocationManager = async () => {
      const locationPath = getUserData().locations[0];
      const queryFunctionLimited = () =>
        query(usersCollection, where('locations', 'array-contains', locationPath), limit(10));
      const queryFunction = () =>
        query(usersCollection, where('locations', 'array-contains', locationPath));
      const totalSize = await getTotalSize(queryFunction);

      return queryUsers(() => queryFunctionLimited(), totalSize);
    };

    // query for multi-location admin
    const handleMultiLocationAdmin = async () => {
      const locationPaths = getUserData().locations;
      const locationRefs = locationPaths.map((locationPath) => doc(firestore, locationPath));

      if (locationRefs.length > 0) {
        for (const locationRef of locationRefs) {
          const locationDoc = await getDoc(locationRef);
          if (locationDoc.exists()) {
            const locationData = locationDoc.data();
            const locationId = locationDoc.id; // Accessing the document ID

            addLocation({ id: locationId, ...locationData });
          } else {
            console.error(`Location document not found for reference: ${locationRef.path}`);
          }
        }
      }

      const queryFunctionLimited = () =>
        query(usersCollection, where('locations', 'array-contains-any', locationPaths), limit(10));
      const queryFunction = () =>
        query(usersCollection, where('locations', 'array-contains-any', locationPaths));
      const totalSize = await getTotalSize(queryFunction);

      return queryUsers(() => queryFunctionLimited(), totalSize);
    };

    // query for corporate admin
    const handleCorporateAdmin = async () => {
      const queryFunctionLimited = () => query(usersCollection, limit(10));
      const queryFunction = () => query(usersCollection);
      const totalSize = await getTotalSize(queryFunction);

      return queryUsers(() => queryFunctionLimited(), totalSize);
    };

    // utility to get total size of the query
    const getTotalSize = async (queryFunction) => {
      const query = queryFunction();
      const snapshot = await getDocs(query);
      return snapshot.size;
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
