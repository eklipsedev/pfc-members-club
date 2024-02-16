import { doc, getDoc } from 'firebase/firestore';

import { getUserClaims } from '../../globals';
import { firestore } from '../../services/firebase/firebase-config';

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

// unwrap the location references based on user locations
export const fetchAndAttachLocationData = async (locationPaths) => {
  const locationDataArray = await Promise.all(
    locationPaths.map(async (locationPath) => {
      const locationRef = doc(firestore, locationPath);
      const locationDoc = await getDoc(locationRef);

      if (locationDoc.exists()) {
        const locationData = locationDoc.data();
        locationData.id = locationDoc.id;
        locationData.locationPath = locationPath;
        return locationData;
      }
      console.error(`Location document not found for reference: ${locationRef.id}`);
      return null;
    })
  );

  return locationDataArray.filter(Boolean);
};

// check user permissions to create, update or delete a user
export const checkPermissions = () => {
  const userClaims = getUserClaims();
  const currentUserRole = userClaims.userRole;
  const allowedRoles = ['corporateAdmin', 'multiLocationAdmin', 'locationManager'];
  const canModifyUser = allowedRoles.includes(currentUserRole);

  if (!canModifyUser) {
    return false;
  }
  return true;
};
