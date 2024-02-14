import { updateProfile } from 'firebase/auth';
import { getDownloadURL, getStorage, ref, uploadBytes } from 'firebase/storage';

import { getUser } from '../../globals';

export const saveProfilePic = async (file) => {
  try {
    const user = getUser();

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
    return { success: false, message: error };
  }
};
