import 'firebase/auth';
import 'firebase/firestore';

import firebase from 'firebase/app';

export const initializeApp = (config) => {
  if (!firebase.apps.length) {
    firebase.initializeApp(config);
  }
};
