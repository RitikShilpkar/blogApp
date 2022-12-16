// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import firebase from 'firebase/compat/app'
import { getAnalytics } from "firebase/analytics";
import {getAuth} from 'firebase/auth'
import {getFirestore} from '@firebase/firestore'
import {getDatabase}  from 'firebase/database'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBHt-YjNT_Aj7yggT1TzJVNijUkE88wpBw",
  authDomain: "blog-fa619.firebaseapp.com",
  projectId: "blog-fa619",
  storageBucket: "blog-fa619.appspot.com",
  messagingSenderId: "634855508341",
  appId: "1:634855508341:web:4007281a4c9b3cb0b46b3c",
  measurementId: "G-5J2477DCLB"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)
export const auth = getAuth(app);

export default app;