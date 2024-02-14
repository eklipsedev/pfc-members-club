export const translateRole = (text) => {
  switch (text) {
    case 'corporateAdmin':
      return 'PFC';
    case 'multiLocationAdmin':
      return 'Multi-Location Admin';
    case 'locationManager':
      return 'Manager';
    case 'fitnessStaff':
      return 'Fitness Staff';
    case 'barStaff':
      return 'Shake/Smoothie Bar Staff';
    case 'other':
      return 'Other';
    default:
      return 'An unknown error occurred.';
  }
};

export const unwrapUserLocations = async (userData) => {
  // Fetch and attach location data
  const locationPaths = userData.locations;
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
};
