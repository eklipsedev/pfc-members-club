import { initializeApp } from 'firebase-admin/app';

import addUserRoleClaim from './users/addUserRoleClaim.mjs';
import connectToShopify from './shopify/connectToShopify.mjs';
import createOrgUser from './users/createOrgUser.mjs';
import deleteOrgUser from './users/deleteOrgUser.mjs';
import updateOrgUser from './users/updateOrgUser.mjs';
import uploadLocationsToFirestore from './utils/addLocations.mjs';

initializeApp();

export {
  addUserRoleClaim,
  connectToShopify,
  createOrgUser,
  deleteOrgUser,
  updateOrgUser,
  uploadLocationsToFirestore,
};
