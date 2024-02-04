export const setLessonButtonState = (button, type) => {
  // Update the lesson button text
  button.firstChild.textContent = type === 'add' ? 'Mark as Incomplete' : 'Mark as Complete';
  type === 'add' ? button.classList.add('is-complete') : button.classList.remove('is-complete');
};
