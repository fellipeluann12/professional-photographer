// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getFirestore } from '@firebase/firestore';
import { getStorage } from 'firebase/storage';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyBwCgsYPexR-Ho4tlHwhbSU8PMIO9uJbLA',
  authDomain: 'professional-photographe-a80df.firebaseapp.com',
  projectId: 'professional-photographe-a80df',
  storageBucket: 'professional-photographe-a80df.appspot.com',
  messagingSenderId: '643184585585',
  appId: '1:643184585585:web:4fc9dedce5e651ffa1e4d0',
  measurementId: 'G-MWD0E0073M',
};

initializeApp(firebaseConfig);

// Initialize Firebase
export const db = getFirestore();
export const storage = getStorage();
