import { httpsCallable } from 'firebase/functions';

import { displayError, displayLoader, hideLoader } from '../../utils/formUtils';
import { functions } from '../firebase/firebase-config';
import { getCurrentUser, isAdmin, isNonAdmin } from '../firebase/utils';

export const connectToShopify = async () => {
  const storeLinks = document.querySelectorAll('[data-shopify-link]');

  if (storeLinks.length) {
    storeLinks.forEach((storeLink) => {
      storeLink.addEventListener('click', async (e) => {
        e.preventDefault();

        try {
          displayLoader(storeLink);

          const user = await getCurrentUser();

          if (user) {
            canadaCheck();

            const { email } = user;

            if ((isAdmin || isNonAdmin) && email.endsWith('@chuzefitness.com')) {
              window.open('https://portal.pfcorders.com', '_blank');
            } else if (isAdmin && !email.endsWith('@chuzefitness.com')) {
              const connectToShopifyFunction = httpsCallable(functions, 'connectToShopify');

              const result = await connectToShopifyFunction();

              if (result) {
                const url = result.data;

                window.open(url, '_blank');
                hideLoader(storeLink);
              } else {
                hideLoader(storeLink);
                displayError('There was an error connecting to PFC Orders');
              }
            } else if (isNonAdmin && !email.endsWith('@chuzefitness.com')) {
              window.open('https://pfcorders.com', '_blank');
              hideLoader(storeLink);
            }
          } else {
            hideLoader(storeLink);
            displayError("The user isn't authenticated");
          }
        } catch (error) {
          hideLoader(storeLink);
          displayError(error.message);
        }
      });
    });
  }
};

// Check if user is from Canada
const canadaCheck = async () => {
  try {
    const response = await fetch('https://ipapi.co/8.8.8.8/country/');

    if (!response.ok) {
      throw new Error('Network response was not ok');
    }

    const data = await response.text();

    if (data.trim() === 'CA') {
      // Redirect to Canada order form
      if (storeLinks.length) {
        setAllStoreLinks('https://form.jotform.com/82984034126155');
      }
    }
  } catch (error) {
    console.error('Error fetching data:', error);
  }
};
