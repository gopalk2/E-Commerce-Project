// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';
import {getFirestore} from 'firebase/firestore';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBjsWxgXoF8ayUkfJiEfOU753qTytGQyQk",
  authDomain: "ecommerce-f073a.firebaseapp.com",
  projectId: "ecommerce-f073a",
  storageBucket: "ecommerce-f073a.appspot.com",
  messagingSenderId: "512698049429",
  appId: "1:512698049429:web:5a44dfc12823a37e250c9c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Firebase Authentication 
const auth = getAuth(app);

// Firebase Database 
const fireDb = getFirestore(app);

export {auth, fireDb};
