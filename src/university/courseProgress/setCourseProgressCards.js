import { collection, doc, getDoc } from 'firebase/firestore';

import { firestore } from '../../services/firebase/firebase-config';
import { getFromLocalStorage } from '../../services/firebase/utils';
import { courseItems } from '../constants';
import { setProgressBar, setProgressPercentage } from '../utils';

// Function to get a user document by userId
const getUserDocumentById = async (userId) => {
  const userDocRef = doc(collection(firestore, 'users'), userId);
  return userDocRef;
};

export const setCourseProgressCards = async () => {
  const urlSearchParams = new URLSearchParams(window.location.search);
  const userIdQueryParam = urlSearchParams.get('userId');

  let userData;

  if (userIdQueryParam) {
    // If userId query parameter is present, fetch user data from Firestore
    try {
      const userDocRef = await getUserDocumentById(userIdQueryParam);
      const userDocSnapshot = await getDoc(userDocRef);

      if (userDocSnapshot.exists()) {
        userData = userDocSnapshot.data();
      }
    } catch (error) {
      console.error('Error fetching user document from Firestore:', error);
    }
  }

  // If userData is still undefined, fall back to local storage
  if (!userData) {
    userData = getFromLocalStorage('userData');
  }

  if (userData) {
    courseItems.forEach((courseItem) => {
      const courseId = courseItem.getAttribute('data-course');
      const lessonCount = courseItem.getAttribute('data-lesson-count');

      // Find the user's course data
      const courseData = userData?.courses?.find((course) => course.id === courseId);

      if (courseData) {
        const completedLessons = courseData.completedLessons || [];
        const completionPercentage = (completedLessons.length / lessonCount) * 100;

        // set the progress percentages
        setProgressBar(courseId, completionPercentage);
        setProgressPercentage(courseId, completionPercentage);
      }
    });
  }
};
