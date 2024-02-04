import { currentLessonId } from './constants';

export const setStyleState = (element) => {
  return window.getComputedStyle(element).display === 'flex' ? 'none' : 'flex';
};

export const setLoader = () => {
  const elements = document.querySelectorAll(`[data-lesson='${currentLessonId}']`);

  if (elements.length) {
    elements.forEach((element) => {
      const loader = element.querySelector("[data-element='loader']");

      if (loader) {
        loader.style.display = setStyleState(loader);
        loader.previousElementSibling.style.display = setStyleState(loader);
      }
    });
  }
};

// set the progress bar
export const setProgressBar = (courseId, completionPercentage) => {
  const progressBar = document.querySelector(
    `[data-course='${courseId}'] [data-element='progress-bar']`
  );

  if (progressBar) {
    progressBar.style.width = `${completionPercentage}%`;
  }
};

// set the progress percentage
export const setProgressPercentage = (courseId, completionPercentage) => {
  const progressPercentage = document.querySelector(
    `[data-course='${courseId}'] [data-element='progress-percentage']`
  );

  if (progressPercentage) {
    progressPercentage.textContent = `${Math.round(completionPercentage)}%`;
  }
};
