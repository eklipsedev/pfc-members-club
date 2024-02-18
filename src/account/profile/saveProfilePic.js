import { updateProfile } from 'firebase/auth';
import { updateDoc } from 'firebase/firestore';
import { getDownloadURL, getStorage, ref, uploadBytes } from 'firebase/storage';

import { getUser } from '../../globals';
import { getUserDocRef } from '../../services/firebase/utils';

const MAX_FILE_SIZE = 5 * 1024 * 1024; // 5 MB
const TARGET_WIDTH = 64;
const TARGET_HEIGHT = 64;

export const saveProfilePic = async (file) => {
  const user = getUser();

  if (!user) return { success: false, message: 'User is not authenticated' };

  try {
    // Check file size
    if (file.size > MAX_FILE_SIZE) {
      return { success: false, message: 'File size exceeds the maximum allowed size.' };
    }

    // Create a temporary canvas element
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');

    // Load the image into the canvas
    const image = await loadImage(file);
    canvas.width = TARGET_WIDTH;
    canvas.height = TARGET_HEIGHT;

    // Resize and draw the image onto the canvas
    ctx.drawImage(image, 0, 0, TARGET_WIDTH, TARGET_HEIGHT);

    // Convert the canvas content to a Blob with the specified MIME type
    const blob = await new Promise((resolve) => {
      canvas.toBlob(
        (blob) => {
          resolve(blob);
        },
        'image/jpeg',
        0.9
      ); // Adjust quality as needed
    });

    // Upload the compressed image to storage
    const storage = getStorage();
    const storageRef = ref(storage, `profile-pictures/${user.uid}`);
    await uploadBytes(storageRef, blob);

    // Get download URL
    const downloadURL = await getDownloadURL(storageRef);

    // Update user profile with the download URL
    await updateProfile(user, {
      photoURL: downloadURL,
    });

    // Update user document in Firestore with the download URL
    const userDocRef = getUserDocRef(user.uid);
    await updateDoc(userDocRef, {
      photoURL: downloadURL,
    });

    // Return the downloadURL
    return { success: true, message: 'Profile pic added successfully', downloadURL };
  } catch (error) {
    console.error('Error in saveProfilePic:', error);
    return { success: false, message: 'Error saving profile pic' };
  }
};

// Helper function to load an image asynchronously
function loadImage(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();

    reader.onload = (event) => {
      const img = new Image();
      img.onload = () => resolve(img);
      img.onerror = reject;
      img.src = event.target.result;
    };

    reader.onerror = reject;
    reader.readAsDataURL(file);
  });
}
