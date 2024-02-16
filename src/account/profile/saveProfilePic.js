import { updateProfile } from 'firebase/auth';
import { getDownloadURL, getStorage, ref, uploadBytes } from 'firebase/storage';

import { getUser } from '../../globals';

export const saveProfilePic = async (file) => {
  const user = getUser();

  if (!user) return { success: false, message: 'User is not authenticated' };

  try {
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
  } catch (error) {
    return { success: false, message: error };
  }
};
