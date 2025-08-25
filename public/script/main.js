// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBkW4TjFhVjTEpH9BuzibEXHUjmIY1dSjc",
  authDomain: "manzanoa-pf-dev.firebaseapp.com",
  projectId: "manzanoa-pf-dev",
  storageBucket: "manzanoa-pf-dev.firebasestorage.app",
  messagingSenderId: "596853193671",
  appId: "1:596853193671:web:3bbd466d9273522868b7e2",
  measurementId: "G-44GTT8DYX2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);