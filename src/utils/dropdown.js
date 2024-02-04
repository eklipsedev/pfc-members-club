export const toggleDropdown = () => {
  document.addEventListener('click', (e) => {
    const element = e.target;

    // Check if the clicked element has the 'data-toggle' attribute
    if (element.getAttribute('data-toggle')) {
      const dropdownContent = element.nextElementSibling;

      // Toggle the 'is-open' class on the dropdown content
      dropdownContent.classList.toggle('is-open');
    } else {
      // Check if the clicked element is outside the dropdown
      const dropdowns = document.querySelectorAll('.is-open');
      dropdowns.forEach((dropdown) => {
        if (!dropdown.contains(element)) {
          dropdown.classList.remove('is-open');
        }
      });
    }
  });
};
