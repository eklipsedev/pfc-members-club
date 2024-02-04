export const lessonItems = Array.from(document.querySelectorAll("[data-element='lesson']"));
export const courseItems = Array.from(document.querySelectorAll('[data-course]'));
export const moduleItems = document.querySelectorAll("[data-element='module']");
export const lessonBtn = document.querySelector("[data-element='lesson-button']") || null;
export const currentLessonId = document.body.getAttribute('data-current-lesson') || null;
export const currentCourseId = document.body.getAttribute('data-current-course') || null;

export const asideBtn = document.querySelector("[data-aside='button']");
export const asideTitle = document.querySelector("[data-aside='title']");
export const asideTag = document.querySelector("[data-aside='tag']");
