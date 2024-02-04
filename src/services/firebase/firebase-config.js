import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { getFunctions } from 'firebase/functions';

// Your configuration object
const firebaseConfig = {
  apiKey: 'AIzaSyCuzMDALA6IDegRI8-suNTEgm1ZJLwDHhI',
  authDomain: 'performance-food-1566579119507.firebaseapp.com',
  databaseURL: 'https://performance-food-1566579119507.firebaseio.com',
  projectId: 'performance-food-1566579119507',
  storageBucket: 'performance-food-1566579119507.appspot.com',
  messagingSenderId: '386651551755',
  appId: '1:386651551755:web:b127ed813e78bf80112f0e',
  measurementId: 'G-P0HSJ7KDYL',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const firestore = getFirestore(app);
const functions = getFunctions(app);

export { auth, firestore, functions };

export default app;
