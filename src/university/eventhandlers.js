/* eslint-disable no-plusplus */
import { displayError } from '../utils/formUtils';
import { setAsideData } from './aside';
import { lessonBtn } from './constants';
import { setCourseProgressCards } from './courseProgress/setCourseProgressCards';
import { updateCurrentCourseProgress } from './courseProgress/updateCurrentCourseProgress';
import { setLessonButtonState } from './lessonItems/setLessonButtonState';
import { setLessonItems } from './lessonItems/setLessonItems';
import { updateLessonItem } from './lessonItems/updateLessonItem';
import { updateLesson } from './lessons/updateLesson';
import { setDropdowns, setModuleDropdowns } from './modules';
import { setLoader } from './utils';

export const handleSetCourseProgressCards = () => {
  setCourseProgressCards();
};

export const handleSetLessonItems = () => {
  setLessonItems();
};

export const handleSetModuleDropdowns = () => {
  setModuleDropdowns();
};

export const handleSetDropdowns = () => {
  setDropdowns();
};

export const handleSetAsideData = () => {
  setAsideData();
};

export const handleLessonButtonClick = () => {
  if (lessonBtn) {
    lessonBtn.addEventListener('click', async () => {
      try {
        setLoader();

        let result;

        if (lessonBtn.classList.contains('is-complete')) {
          result = await updateLesson('remove');

          if (result.success) {
            setLoader();
            setLessonButtonState(lessonBtn, 'remove');
            updateCurrentCourseProgress('remove');
            updateLessonItem('remove');
          } else {
            setLoader();
            displayError(result.message);
          }
        } else {
          result = await updateLesson('add');

          if (result.success) {
            setLoader();
            setLessonButtonState(lessonBtn, 'add');
            updateCurrentCourseProgress('add');
            updateLessonItem('add');
          } else {
            setLoader();
            displayError(result.message);
          }
        }
      } catch (error) {
        setLoader();
        displayError(error.message);
      }
    });
  }
};
