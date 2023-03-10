import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth, GoogleAuthProvider } from 'firebase/auth';
import {getStorage} from 'firebase/storage';

const firebaseConfig = {
  apiKey: 'AIzaSyCgGOMeWsiZMGB3vx_VA8mRUYnChhMBYgo',
  authDomain: 'to-do-list-87362.firebaseapp.com',
  projectId: 'to-do-list-87362',
  storageBucket: 'to-do-list-87362.appspot.com',
  messagingSenderId: '961171571576',
  appId: '1:961171571576:web:4a7e5a5f614bea219bbe8d'
};


export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
export const storage = getStorage(app);
export const googleProvider = new GoogleAuthProvider();
