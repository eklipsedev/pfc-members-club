import { updateDoc } from 'firebase/firestore';

import { getUser } from '../../globals';
import {
  getFromLocalStorage,
  getUserCourses,
  setToLocalStorage,
} from '../../services/firebase/utils';
import { currentCourseId, currentLessonId } from '../constants';

export const updateLesson = async (action) => {
  const user = getUser();

  if (!user) return { success: false, message: 'User is not authenticated' };

  try {
    const result = await getUserCourses(user.uid);

    if (result.success) {
      const userCourses = result.courses;
      const { userDocRef } = result;

      let currentCourse = userCourses.find((course) => course.id === currentCourseId) || {};
      let completedLessons = currentCourse.completedLessons || [];

      // Update the completed lessons array based on the type
      let updatedCompletedLessons = completedLessons;

      if (action === 'add' && !completedLessons.some((lesson) => lesson.id === currentLessonId)) {
        updatedCompletedLessons = [...completedLessons, { id: currentLessonId }];
      } else if (
        action === 'remove' &&
        completedLessons.some((lesson) => lesson.id === currentLessonId)
      ) {
        updatedCompletedLessons = completedLessons.filter(
          (lesson) => lesson.id !== currentLessonId
        );
      }

      // Create a new currentCourse object with the updated completed_lessons property
      currentCourse = {
        id: currentCourseId,
        completedLessons: updatedCompletedLessons,
      };

      // Check if the currentCourse is found in userCourses
      const existingCourseIndex = userCourses.findIndex((course) => course.id === currentCourseId);

      const userData = getFromLocalStorage('userData');

      if (existingCourseIndex !== -1) {
        // Update existing course
        await updateDoc(userDocRef, {
          courses: userCourses.map((course, index) =>
            index === existingCourseIndex ? currentCourse : course
          ),
        });

        const updatedUserData = {
          ...userData,
          courses: userCourses.map((course, index) =>
            index === existingCourseIndex ? currentCourse : course
          ),
        };

        setToLocalStorage('userData', updatedUserData);
      } else {
        // Add new course
        await updateDoc(userDocRef, {
          courses: [...userCourses, currentCourse],
        });

        const updatedUserData = {
          ...userData,
          courses: [...userCourses, currentCourse],
        };

        setToLocalStorage('userData', updatedUserData);
      }

      return { success: true, message: 'This is a test message' };
    }

    // there are no courses set, so set this one
    const newCourseData = [
      {
        id: currentCourseId,
        completedLessons: [
          {
            id: currentLessonId,
          },
        ],
      },
    ];

    await updateDoc(userDocRef, { courses: newCourseData });

    const userData = getFromLocalStorage('userData');

    if (userData) {
      const updatedUserData = {
        ...userData,
        courses: newCourseData,
      };

      setToLocalStorage('userData', updatedUserData);
    }

    return { success: true, message: 'This is a test message' };
  } catch (error) {
    return { success: false, message: error.message };
  }
};
