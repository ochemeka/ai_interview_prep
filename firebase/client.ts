// Import the functions you need from the SDKs you need
import { getApp, getApps, initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";


// // Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional


const firebaseConfig = {
  apiKey: "AIzaSyCyMez1L1H3JbJBDHPHWYELCoqJy9EiG28",
  authDomain: "prepwise-6c3a4.firebaseapp.com",
  projectId: "prepwise-6c3a4",
  storageBucket: "prepwise-6c3a4.firebasestorage.app",
  messagingSenderId: "496508353637",
  appId: "1:496508353637:web:7c1e54db3b7d0decd79a8c",
  measurementId: "G-8WFZT411Z4"
};

// Initialize Firebase
const app = !getApps.length ? initializeApp(firebaseConfig): getApp();
// const analytics = getAnalytics(app);

export const auth = getAuth(app);
export const db = getFirestore(app); 