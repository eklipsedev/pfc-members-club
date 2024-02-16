import {
  collection,
  doc,
  getCountFromServer,
  getDoc,
  getDocs,
  limit,
  orderBy,
  query,
  startAfter,
  where,
} from 'firebase/firestore';

import { getUserClaims, getUserData, getUserId } from '../../globals';
import { firestore } from '../../services/firebase/firebase-config';
import { fetchAndAttachLocationData } from './utils';
import {
  addLocation,
  getCurrentPage,
  getLastVisible,
  getTotalCount,
  getUsers,
  getVisibleCount,
  setCurrentPage,
  setLastVisible,
  setTotalCount,
  setUsers,
  setVisibleCount,
} from './variables';

const handleUserQuery = async (queryFunction, totalSizeLimited, totalSize) => {
  const usersQuery = queryFunction();
  const usersSnapshot = await getDocs(usersQuery);

  const usersDataArray = [];

  for (const userDoc of usersSnapshot.docs) {
    if (userDoc.id !== getUserId()) {
      const userDataWithId = {
        userId: userDoc.id,
        ...userDoc.data(),
      };

      const locationPaths = userDataWithId.locations;
      const locationDataArray = locationPaths
        ? await fetchAndAttachLocationData(locationPaths)
        : [];

      userDataWithId.locations = locationDataArray;
      usersDataArray.push(userDataWithId);
    }
  }

  let currentUsers = getUsers(); // an array
  const lastVisible = getLastVisible();
  const newUsersData = lastVisible
    ? currentUsers.concat(usersDataArray)
    : (currentUsers = usersDataArray);

  setUsers(newUsersData);

  const lastDocument = usersSnapshot.docs[usersSnapshot.docs.length - 1] || null;
  setLastVisible(lastDocument);

  const hasMore = totalSize > totalSizeLimited && !!lastDocument;

  setCurrentPage(getCurrentPage() + 1);

  return {
    success: true,
    usersData: usersDataArray,
    totalSize,
    visibleSize: getVisibleCount(),
    hasMore,
    lastDocument,
  };
};

const pageSize = 10;

export const renderUsers = async (inputValue = null, action = 'render') => {
  try {
    const userClaims = getUserClaims();
    const { userRole } = userClaims;

    const usersCollection = collection(firestore, 'users');

    let queryFunction;
    let queryFunctionLimited;

    // will determine if this is a "Search" operation
    // if it is, reset all values
    if (action === 'search') {
      setTotalCount(0);
      setVisibleCount(0);
      setCurrentPage(1);
      setLastVisible(null);
      setUsers([]);
    }

    let lastVisible = getLastVisible();

    // Function to handle search queries
    const handleSearch = (searchValue) => {
      return searchValue
        ? query(
            usersCollection, // Replace with your actual collection reference
            where('email', '>=', searchValue),
            where('email', '<=', searchValue + '\uf8ff')
            //where('firstName', '==', searchValue),
            //where('firstName', '<=', searchValue + '\uf8ff'),
            //where('lastName', '==', searchValue),
            //where('lastName', '<=', searchValue + '\uf8ff')
          )
        : usersCollection; // Return the collection reference if searchValue is not present
    };

    // case for location manager
    const handleLocationManager = async () => {
      const locationPath = getUserData().locations[0];

      queryFunctionLimited = () =>
        query(
          handleSearch(inputValue),
          where('locations', 'array-contains', locationPath),
          orderBy('email'),
          startAfter(lastVisible),
          limit(pageSize)
        );
      queryFunction = () =>
        query(handleSearch(inputValue), where('locations', 'array-contains', locationPath));

      let totalSizeLimited = getVisibleCount();
      let totalSize = getTotalCount();

      if (!lastVisible) {
        totalSizeLimited = await getTotalSize(queryFunctionLimited);
        totalSize = await getTotalSize(queryFunction);
        setVisibleCount(totalSizeLimited);
        setTotalCount(totalSize);
      }

      return handleUserQuery(queryFunctionLimited, totalSizeLimited, totalSize);
    };

    // case for multi-location admin
    const handleMultiLocationAdmin = async () => {
      const locationPaths = getUserData().locations;
      const locationRefs = locationPaths.map((locationPath) => doc(firestore, locationPath));

      if (locationRefs.length > 0) {
        for (const locationRef of locationRefs) {
          const locationDoc = await getDoc(locationRef);
          if (locationDoc.exists()) {
            const locationData = locationDoc.data();
            const locationId = locationDoc.id;

            addLocation({ id: locationId, ...locationData });
          } else {
            console.error(`Location document not found for reference: ${locationRef.path}`);
          }
        }
      }

      queryFunctionLimited = () =>
        query(
          handleSearch(inputValue),
          where('locations', 'array-contains-any', locationPaths),
          orderBy('email'),
          startAfter(lastVisible),
          limit(pageSize)
        );

      queryFunction = () =>
        query(handleSearch(inputValue), where('locations', 'array-contains-any', locationPaths));

      let totalSizeLimited = getVisibleCount();
      let totalSize = getTotalCount();

      if (!lastVisible) {
        totalSizeLimited = await getTotalSize(queryFunctionLimited);
        totalSize = await getTotalSize(queryFunction);
        setVisibleCount(totalSizeLimited);
        setTotalCount(totalSize);
      }

      return handleUserQuery(queryFunctionLimited, totalSizeLimited, totalSize);
    };

    // case for corporate admin
    const handleCorporateAdmin = async () => {
      queryFunctionLimited = () =>
        query(handleSearch(inputValue), orderBy('email'), startAfter(lastVisible), limit(pageSize));

      queryFunction = () => query(handleSearch(inputValue));

      let totalSizeLimited = getVisibleCount();
      let totalSize = getTotalCount();

      if (!lastVisible) {
        totalSizeLimited = await getTotalSize(queryFunctionLimited);
        totalSize = await getTotalSize(queryFunction);
        setVisibleCount(totalSizeLimited);
        setTotalCount(totalSize);
      }

      return handleUserQuery(queryFunctionLimited, totalSizeLimited, totalSize);
    };

    const getTotalSize = async (queryFunction) => {
      const query = queryFunction();
      const snapshot = await getCountFromServer(query);

      return snapshot.data().count;
    };

    switch (userRole) {
      case 'locationManager':
        return handleLocationManager();
      case 'multiLocationAdmin':
        return handleMultiLocationAdmin();
      case 'corporateAdmin':
        return handleCorporateAdmin();
      default:
        return { success: false, message: 'Unsupported user type' };
    }
  } catch (error) {
    return { success: false, message: `Error loading users: ${error}` };
  }
};
