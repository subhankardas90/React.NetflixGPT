// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBBTdoZ-tG-PRWK8X9oLknJLWIogRyGMHQ",
  authDomain: "reactnetflixgpt.firebaseapp.com",
  projectId: "reactnetflixgpt",
  storageBucket: "reactnetflixgpt.appspot.com",
  messagingSenderId: "849130201947",
  appId: "1:849130201947:web:174cfaa0f863420fb6f07e",
  measurementId: "G-4YRR40PJZJ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();