import { collection, getDocs, limit, orderBy, query, where } from 'firebase/firestore';

import { getUserClaims } from '../../globals';
import { firestore } from '../../services/firebase/firebase-config';
import {
  addSelectedLocation,
  getFilteredLocations,
  getLocations,
  getSelectedLocations,
  setFilteredLocations,
  setLocations,
  setSelectedLocations,
} from './variables';

export const handleComboBox = () => {
  const comboBoxComponents = document.querySelectorAll("[data-element='combo-box-component']");

  if (comboBoxComponents.length) {
    comboBoxComponents.forEach((comboBoxComponent) => {
      const comboBoxInput = comboBoxComponent.querySelectorAll('input')[0];
      const comboBoxList = comboBoxComponent.firstElementChild.nextElementSibling.firstElementChild;
      const comboBoxListItem = comboBoxList.firstElementChild;
      const comboBoxLoader = comboBoxList.nextElementSibling;
      const comboBoxListEmpty = comboBoxLoader.nextElementSibling;
      const comboBoxValueInput = comboBoxComponent.parentElement.parentElement.nextElementSibling;
      const comboBoxPill = document.querySelector("[data-element='combo-box-pill']");

      const { userRole } = getUserClaims();

      let delayTimer;

      const handleInput = async () => {
        const inputValue = comboBoxInput.value;

        clearTimeout(delayTimer);
        delayTimer = setTimeout(async () => {
          comboBoxList.innerHTML = '';

          // If input length is 0, hide the comboBoxList
          if (inputValue.length === 0) {
            comboBoxList.parentElement.style.display = 'none';
            return;
          }

          comboBoxLoader.style.display = 'block';
          comboBoxListEmpty.style.display = 'none';

          const locations = await fetchLocations(inputValue);
          setFilteredLocations(filterSelectedLocations(locations));

          if (getFilteredLocations().length === 0) {
            comboBoxLoader.style.display = 'none';
            comboBoxListEmpty.style.display = 'block';
          } else {
            comboBoxListEmpty.style.display = 'none';
            comboBoxLoader.style.display = 'none';
            displayResults(getFilteredLocations());
          }
          comboBoxList.parentElement.style.display = 'block';
        }, 300);
      };

      const fetchLocations = async (inputValue) => {
        if (userRole === 'multiLocationAdmin') {
          return getLocations();
        }
        if (userRole === 'corporateAdmin') {
          const locationsCollection = collection(firestore, 'locations');

          // Create a base query for name filtering
          let baseQuery = query(
            locationsCollection,
            where('name', '>=', inputValue),
            where('name', '<=', inputValue + '\uf8ff'),
            orderBy('name'),
            limit(5)
          );

          const querySnapshot = await getDocs(baseQuery);

          const locationsData = querySnapshot.docs.map((doc) => ({
            id: doc.id,
            locationId: doc.data().locationId,
            name: doc.data().name,
          }));

          setLocations(locationsData);
          return locationsData;
        }
      };

      const filterSelectedLocations = (locations) => {
        const selectedLocations = getSelectedLocations();
        return locations.filter((location) => {
          // Check if the current location's id is not in the selectedLocations array
          return !selectedLocations.some((selectedLocation) => selectedLocation.id === location.id);
        });
      };

      const displayResults = (results) => {
        comboBoxList.innerHTML = '';

        results.forEach((result) => {
          const resultItem = comboBoxListItem.cloneNode(true);
          resultItem.textContent = result.name;
          resultItem.addEventListener('click', () =>
            addToSelectedLocations(
              result,
              comboBoxPill,
              comboBoxList,
              comboBoxInput,
              comboBoxValueInput
            )
          );

          comboBoxList.appendChild(resultItem);
        });
      };

      comboBoxInput.addEventListener('input', handleInput);
    });
  }
};

// function to add to selected locations
export const addToSelectedLocations = (
  location,
  pill,
  comboBoxList,
  comboBoxInput,
  comboBoxValueInput
) => {
  const newPill = pill.cloneNode(true);
  newPill.firstChild.textContent = location.name;
  newPill.firstElementChild.nextElementSibling.addEventListener('click', () => {
    removeSelectedLocation(location, newPill, comboBoxValueInput);
  });
  comboBoxInput.parentNode.insertBefore(newPill, comboBoxInput);
  addSelectedLocation(location);
  newPill.style.display = 'flex';
  comboBoxInput.value = '';
  comboBoxList.innerHTML = '';

  const getIds = [];

  getSelectedLocations().forEach((location) => {
    getIds.push(location.id);
  });
  comboBoxValueInput.value = getIds.join(',');
};

// function to remove a selected location
export const removeSelectedLocation = (location, pill, comboBoxValueInput) => {
  pill.remove();
  setSelectedLocations(getSelectedLocations().filter((item) => item.id !== location.id));
  const getIds = [];

  getSelectedLocations().forEach((location) => {
    getIds.push(location.id);
  });
  comboBoxValueInput.value = getIds.join(',');
};

// function to reset the combo box
export const resetComboBox = (comboBoxComponent) => {
  // clear any pills if there are any
  const comboBoxList = comboBoxComponent.firstElementChild.nextElementSibling.firstElementChild;
  const pills = comboBoxComponent.querySelectorAll("[data-element='combo-box-pill']");

  if (pills) {
    pills.forEach((pill) => {
      pill.remove();
    });
  }

  comboBoxList.innerHTML = '';
  comboBoxComponent.parentElement.parentElement.nextElementSibling.value = '';
  comboBoxList.parentElement.style.display = 'none';
};
