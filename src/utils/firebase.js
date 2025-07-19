// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAvBx5DyKQFk8fwgbXAHxGMx_nbycuzU14",
  authDomain: "netflixgpt-ba72b.firebaseapp.com",
  projectId: "netflixgpt-ba72b",
  storageBucket: "netflixgpt-ba72b.firebasestorage.app",
  messagingSenderId: "80886227519",
  appId: "1:80886227519:web:f6d75e6491f3360a214e8a",
  measurementId: "G-21P6278L5H",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();
