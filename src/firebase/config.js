import {initializeApp} from 'firebase/app';
import {getAuth} from 'firebase/auth';
// import {getFirestore} from 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyB1fqOZo-D2zTrNwSZ88pzKyBVM1fsnah0',
  authDomain: 'burger-queen-vpch.firebaseapp.com',
  projectId: 'burger-queen-vpch',
  storageBucket: 'burger-queen-vpch.appspot.com',
  messagingSenderId: '430299087982',
  appId: '1:430299087982:web:72d4708fa0d1ee84d0927f',
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

// export const db = getFirestore(app);
