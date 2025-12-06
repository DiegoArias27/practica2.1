import { initializeApp } from 'firebase/app';
import { getDatabase } from "firebase/database";


// Optionally import the services that you want to use
// import {...} from 'firebase/auth';
// import {...} from 'firebase/database';
// import {...} from 'firebase/firestore';
// import {...} from 'firebase/functions';
// import {...} from 'firebase/storage';

// Initialize Firebase
const firebaseConfig = {
  apiKey: 'AIzaSyApLKsIaWf4QCfiluMn41M8Chles8LlKSk',
  authDomain: 'skinet-d270c.firebaseapp.com',
  databaseURL: 'https://skinet-d270c-default-rtdb.firebaseio.com',
  projectId: 'skinet-d270c',
  storageBucket: 'skinet-d270c.appspot.com',
  messagingSenderId: '514546451124',
  appId: '1:514546451124:android:1ccda7c49f3a8bdc044de1',
  measurementId: 'G-measurement-id',
};

const app = initializeApp(firebaseConfig);
// For more information on how to access Firebase in your project,
// see the Firebase documentation: https://firebase.google.com/docs/web/setup#access-firebase

export const db = getDatabase(app);
