import { getCurrentUser, getUserDataFromLocalStorage } from '../../services/firebase/utils';

export const setProfileData = async () => {
  const user = await getCurrentUser();

  if (user) {
    const userData = getUserDataFromLocalStorage();

    if (userData) {
      return { success: true, data: userData, user: user };
    }
    return { success: false, message: "Couldn't find the users data" };
  }
  return { success: false, message: 'No user found' };
};
