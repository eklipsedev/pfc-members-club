/* eslint-disable no-plusplus */
import { getFromLocalStorage } from '../../services/firebase/utils';
import { currentCourseId, currentLessonId, lessonBtn, lessonItems } from '../constants';
import { variables } from '../variables';
import { setLessonButtonState } from './setLessonButtonState';

export const setLessonItems = () => {
  const userData = getFromLocalStorage('userData');

  if (!userData || !userData.courses) {
    return { success: false, message: 'No course data found for the user.' };
  }

  const currentCourse = userData.courses.find((course) => course.id === currentCourseId);

  if (currentCourse) {
    const { completedLessons } = currentCourse;

    lessonItems.forEach((lesson) => {
      const lessonId = lesson.getAttribute('data-lesson');

      if (completedLessons.some((completedLesson) => completedLesson.id === lessonId)) {
        lesson.classList.add('is-complete');
        variables.totalCompletedLessons++;
        if (currentLessonId && lessonId === currentLessonId) {
          setLessonButtonState(lessonBtn, 'add');
        }
      }
    });
  }
};
