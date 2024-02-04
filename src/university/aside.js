import { asideBtn, asideTag, asideTitle, lessonItems } from './constants';
import { variables } from './variables';

export const setAsideData = () => {
  const page = document.body.getAttribute('data-page');
  const currentURL = window.location.href;

  // check for existence of aside element
  if (asideBtn && asideTitle && asideTag) {
    let hasAtLeastOneCompleteLesson = false;

    for (const lesson of lessonItems) {
      if (lesson.classList.contains('is-complete')) {
        hasAtLeastOneCompleteLesson = true;
      } else if (
        !variables.firstIncompleteLesson &&
        lesson.querySelector('a').href !== currentURL
      ) {
        variables.firstIncompleteLesson = lesson;
      }
    }

    // if it's the course page
    if (page === 'course') {
      if (hasAtLeastOneCompleteLesson) {
        // user has started the course
        if (variables.firstIncompleteLesson) {
          // next lesson in the course
          asideTag.textContent = 'Continue course:';
          asideTitle.textContent =
            variables.firstIncompleteLesson.querySelector("[data-lesson='title']").textContent;
          asideBtn.href = variables.firstIncompleteLesson.querySelector('a').href;
          asideBtn.textContent = 'Go to Lesson';
        } else {
          // all lessons are complete
        }
      } else {
        // course has not been started yet
        asideTag.textContent = 'Start course:';
        asideTitle.textContent =
          variables.firstIncompleteLesson.querySelector("[data-lesson='title']").textContent;
        asideBtn.href = variables.firstIncompleteLesson.querySelector('a').href;
      }
      // if it's the lesson page
    } else if (page === 'lesson') {
      asideTag.textContent = 'Next lesson:';
      asideTitle.textContent =
        variables.firstIncompleteLesson.querySelector("[data-lesson='title']").textContent;
      asideBtn.href = variables.firstIncompleteLesson.querySelector('a').href;
      asideBtn.textContent = 'Next Lesson';
    }
  }
};
