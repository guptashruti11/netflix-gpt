// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {
  apiKey: "AIzaSyCdSX1BquBGM_NaizF4niFf6h9foSG1xeM",
  authDomain: "netflix-gpt-db2e7.firebaseapp.com",
  projectId: "netflix-gpt-db2e7",
  storageBucket: "netflix-gpt-db2e7.appspot.com",
  messagingSenderId: "659678643208",
  appId: "1:659678643208:web:f86855eacd9b5be0febdbd",
  measurementId: "G-W517YG9R5W"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();
