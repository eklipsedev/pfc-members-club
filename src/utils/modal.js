import { resetComboBox } from '../account/users/comboBox';
import { setFilteredLocations, setSelectedLocations } from '../account/users/variables';

export const openModal = (modalId) => {
  const modal = document.querySelector(`[data-modal=${modalId}]`);
  modal.classList.add('is-open');

  // Attach a click event listener to the first child of the modal
  const closeModalButton = modal.firstElementChild;

  const closeModalHandler = () => {
    closeModal(modalId);
    // Remove the event listener after it's been clicked once
    closeModalButton.removeEventListener('click', closeModalHandler);
  };

  closeModalButton.addEventListener('click', closeModalHandler);
};

export const closeModal = (modalId) => {
  const modal = document.querySelector(`[data-modal=${modalId}]`);
  const modalForm = modal.querySelector('form');

  if (modalForm) {
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
