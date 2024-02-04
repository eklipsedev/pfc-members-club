import { currentLessonId, lessonItems } from '../constants';

export const updateLessonItem = (action) => {
  const lessonItem = lessonItems.find((item) => item.dataset.lesson === currentLessonId);

  if (lessonItem) {
    if (action === 'add') {
      lessonItem.classList.add('is-complete');
    } else if (action === 'remove') {
      lessonItem.classList.remove('is-complete');
    }
  }
};
