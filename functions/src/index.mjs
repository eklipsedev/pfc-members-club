import { initializeApp } from 'firebase-admin/app';

import addUserTypeClaim from './users/addUserTypeClaim.mjs';
import connectToShopify from './shopify/connectToShopify.mjs';
import createOrgUser from './users/createOrgUser.mjs';
import deleteOrgUser from './users/deleteOrgUser.mjs';
import updateOrgUser from './users/updateOrgUser.mjs';

initializeApp();

export { addUserTypeClaim, connectToShopify, createOrgUser, deleteOrgUser, updateOrgUser };
