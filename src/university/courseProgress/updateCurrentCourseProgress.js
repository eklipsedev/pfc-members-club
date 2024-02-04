import { currentCourseId } from '../constants';
import { courseItems, lessonItems } from '../constants';
import { setProgressBar, setProgressPercentage } from '../utils';
import { variables } from '../variables';

export const updateCurrentCourseProgress = (action) => {
  if (courseItems && courseItems.length) {
    const currentCourse = courseItems.find((item) => item.dataset.course === currentCourseId);

    if (currentCourse) {
      let completedLessonsCount;

      if (action === 'add') {
        variables.totalCompletedLessons += 1; // Increment the variable
        completedLessonsCount = variables.totalCompletedLessons;
      } else if (action === 'remove') {
        variables.totalCompletedLessons -= 1; // Decrement the variable
        completedLessonsCount = variables.totalCompletedLessons;
      }

      const lessonCount = lessonItems.length;

      const completionPercentage = (completedLessonsCount / lessonCount) * 100;

      // set the progress percentages
      setProgressBar(currentCourseId, completionPercentage);
      setProgressPercentage(currentCourseId, completionPercentage);
    }
  }
};
