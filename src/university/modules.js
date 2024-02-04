import { asideBtn } from './constants';
import { lessonItems, moduleItems } from './constants';

export const setModuleDropdowns = () => {
  if (moduleItems && lessonItems) {
    moduleItems.forEach((module) => {
      const moduleId = module.getAttribute('data-module');
      const lessons = lessonItems.filter(
        (lesson) => lesson.getAttribute('data-module') === moduleId
      );

      lessons.forEach((lesson) => {
        module.querySelector("[data-element='lessons']").append(lesson);
      });
    });
  }
};

export const setDropdowns = () => {
  if (moduleItems) {
    moduleItems.forEach((module) => {
      const moduleComponent = module.firstElementChild;
      const moduleTrigger = moduleComponent.firstElementChild;
      const links = moduleComponent.querySelectorAll('a');

      if (asideBtn) {
        links.forEach((link) => {
          if (link.classList.contains('w--current') || link.href === asideBtn.href) {
            moduleComponent.classList.add('is-active');
            return;
          }
        });
      }

      moduleTrigger.addEventListener('click', () => {
        moduleComponent.classList.toggle('is-active');
      });
    });
  }
};
