import { getFromLocalStorage } from '../../services/firebase/utils';
import { courseItems } from '../constants';
import { setProgressBar, setProgressPercentage } from '../utils';

export const setCourseProgressCards = () => {
  if (courseItems && courseItems.length) {
    // Retrieve user data from local storage
    const userData = getFromLocalStorage('userData');

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
  }
};
