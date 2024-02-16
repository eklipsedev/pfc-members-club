export const handleToggleDropdowns = () => {
  const dropdowns = document.querySelectorAll('.user-table_dropdown-list');
  const toggleButtons = document.querySelectorAll('[data-toggle]');

  function toggleDropdowns() {
    dropdowns.forEach((dropdown) => {
      dropdown.classList.toggle('is-open');
    });
  }

  function closeDropdownsIfOutside(event) {
    const isClickInsideDropdown = Array.from(dropdowns).some((dropdown) =>
      dropdown.contains(event.target)
    );

    if (
      !isClickInsideDropdown &&
      Array.from(dropdowns).some((dropdown) => dropdown.classList.contains('is-open'))
    ) {
      dropdowns.forEach((dropdown) => {
        dropdown.classList.remove('is-open');
      });
    }
  }

  // Attach click listener to each toggle button
  toggleButtons.forEach((button) => {
    button.addEventListener('click', toggleDropdowns);
  });

  // Add an event listener to close dropdowns when clicking outside
  document.body.addEventListener('click', closeDropdownsIfOutside);

  // Add an event listener to close dropdowns when clicking outside
  document.body.addEventListener('click', closeDropdownsIfOutside);
};
