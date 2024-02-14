/* eslint-disable no-return-assign */
// globals.js
let user = null; // stores the entire auth user object
let userId = null;
let userLocations = [];
let userToken = null;
let userData = null; // user data from firestore
let userClaims = null;

export const getUser = () => user;
export const setUser = (value) => (user = value);

export const getUserId = () => userId;
export const setUserId = (value) => (userId = value);

export const getUserLocations = () => userLocations;
export const setUserLocations = (value) => (userLocations = value);

export const getUserToken = () => userToken;
export const setUserToken = (value) => (userToken = value);

export const getUserData = () => userData;
export const setUserData = (value) => (userData = value);

export const getUserClaims = () => userClaims;
export const setUserClaims = (value) => (userClaims = value);
