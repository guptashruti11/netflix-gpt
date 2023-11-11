// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDq82TqNr0HuPlG3jCyQ33VAmNcVT2_tC8",
  authDomain: "netflixgpt-f2627.firebaseapp.com",
  projectId: "netflixgpt-f2627",
  storageBucket: "netflixgpt-f2627.appspot.com",
  messagingSenderId: "893485666425",
  appId: "1:893485666425:web:8718e16853914f344dc4a8",
  measurementId: "G-GKT67HD7MT"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();