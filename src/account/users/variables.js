/* eslint-disable no-plusplus */
let locations = [];
let selectedLocations = []; // the location values the user chooses
let filteredLocations = []; // the filtered list of values based on what's already selected

let userListLocations = [];

let users = [];

let visibleCount = 0;
let totalCount = 0;

export const getUsers = () => users;
export const setUsers = (value) => {
  if (Array.isArray(value)) {
    users = value;
  } else {
    users = [value];
  }
  visibleCount = value.length;
};
export const addUser = (user) => {
  users.push(user);
  visibleCount++;
};

export const updateUserById = (userId, updatedUser) => {
  const index = users.findIndex((user) => user.userId === userId);

  if (index !== -1) {
    // Replace the user at the found index with the updated user
    users[index] = updatedUser;
  } else {
    // User with the specified userId not found, handle accordingly
    visibleCount++;
    users.push(updatedUser);
  }
};

export const getVisibleCount = () => visibleCount;
export const setVisibleCount = (newValue = visibleCount) => {
  visibleCount = newValue;
};

export const getTotalCount = () => totalCount;
export const setTotalCount = (newValue = totalCount) => {
  totalCount = newValue;
};

export const getLocations = () => locations;
export const setLocations = (value) => {
  if (Array.isArray(value)) {
    locations = value;
  } else {
    locations = [value];
  }
};
export const addLocation = (location) => {
  locations.push(location);
};

export const getSelectedLocations = () => selectedLocations;
export const setSelectedLocations = (value) => {
  if (Array.isArray(value)) {
    selectedLocations = value;
  } else {
    selectedLocations = [value];
  }
};
export const addSelectedLocation = (location) => {
  selectedLocations.push(location);
};

export const getFilteredLocations = () => filteredLocations;
export const setFilteredLocations = (value) => {
  if (Array.isArray(value)) {
    filteredLocations = value;
  } else {
    filteredLocations = [value];
  }
};

export const getUserListLocations = () => userListLocations;
export const setUserListLocations = (value) => {
  if (Array.isArray(value)) {
    userListLocations = value;
  } else {
    userListLocations = [value];
  }
};
export const adduserListLocation = (location) => {
  userListLocations.push(location);
};
