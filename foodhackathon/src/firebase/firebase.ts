// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCLC7bso5Nn1FJ3ZOya-IjOKeezD_txcQ4",
  authDomain: "foodify23.firebaseapp.com",
  projectId: "foodify23",
  storageBucket: "foodify23.appspot.com",
  messagingSenderId: "227645755394",
  appId: "1:227645755394:web:da7e6d892047c5f4e5d71b",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
