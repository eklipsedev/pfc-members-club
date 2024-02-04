import { updateProfile } from 'firebase/auth';
import { getDownloadURL, getStorage, ref, uploadBytes } from 'firebase/storage';

import { getCurrentUser } from '../../services/firebase/utils';

export const saveProfilePic = async (file) => {
  try {
    const user = await getCurrentUser();

    if (user) {
      const storage = getStorage();
      const storageRef = ref(storage, `profile-pictures/${user.uid}`);

      const [downloadURL] = await Promise.all([
        uploadBytes(storageRef, file),
        getDownloadURL(storageRef),
        updateProfile(user, {
          photoURL: downloadURL,
        }),
      ]);

      return { success: true, message: 'Profile pic added successfully' };
    }

    return { success: false, message: 'User is not authenticated' };
  } catch (error) {
    // Customize error handling based on the type of error
    if (error.code === 'storage/unauthorized') {
      return { success: false, message: 'User does not have permission to upload a profile pic' };
    }
    // Generic error handling
    return { success: false, message: error.message };
  }
};
