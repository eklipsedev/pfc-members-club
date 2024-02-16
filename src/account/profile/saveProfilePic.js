import { updateProfile } from 'firebase/auth';
import { getDownloadURL, getStorage, ref, uploadBytes } from 'firebase/storage';

import { getUser } from '../../globals';

export const saveProfilePic = async (file) => {
  const user = getUser();

  if (!user) return { success: false, message: 'User is not authenticated' };

  try {
    const storage = getStorage();
    const storageRef = ref(storage, `profile-pictures/${user.uid}`);

    // Upload file to storage
    await uploadBytes(storageRef, file);

    // Get download URL
    const downloadURL = await getDownloadURL(storageRef);

    // Update user profile with the download URL
    await updateProfile(user, {
      photoURL: downloadURL,
    });

    return { success: true, message: 'Profile pic added successfully' };
  } catch (error) {
    return { success: false, message: error.message || 'Error saving profile pic' };
  }
};
