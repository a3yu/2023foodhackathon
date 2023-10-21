// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB_Nvu-j5678KDiQ5Q9JyKrLruPLFoFGtk",
  authDomain: "foodhackathon23.firebaseapp.com",
  projectId: "foodhackathon23",
  storageBucket: "foodhackathon23.appspot.com",
  messagingSenderId: "386475510582",
  appId: "1:386475510582:web:d7bc9e08bbf1aaff778197",
  measurementId: "G-ZQV6X10X25",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
