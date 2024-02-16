import { resetComboBox } from '../account/users/comboBox';
import { setFilteredLocations, setSelectedLocations } from '../account/users/variables';

export const openModal = (modalId) => {
  const modal = document.querySelector(`[data-modal=${modalId}]`);
  modal.classList.add('is-open');

  const closeModalButtons = modal.querySelectorAll("[data-pfc-action='close-modal']");

  closeModalButtons.forEach((closeModalButton) => {
    closeModalButton.addEventListener('click', () => {
      closeModalHandler(closeModalButton);
    });
  });

  const closeModalHandler = (closeModalButton) => {
    closeModal(modalId);
    // Remove the event listener after it's been clicked once
    closeModalButton.removeEventListener('click', closeModalHandler);
  };
};

export const closeModal = (modalId) => {
  const modal = document.querySelector(`[data-modal=${modalId}]`);
  const modalForm = modal.querySelector('form');
  const updateEmailForm = modalForm.getAttribute('data-pfc-form') === 'update-email';

  if (modalForm && !updateEmailForm) {
    modalForm.reset();

    const comboBoxComponent = modalForm.querySelector("[data-element='combo-box-component']");

    if (comboBoxComponent) {
      if (modalId === 'update-user' || modalId === 'create-user') {
        setSelectedLocations([]);
        setFilteredLocations([]);
        resetComboBox(comboBoxComponent);
      }
    }
  }

  modal.classList.remove('is-open');
};
