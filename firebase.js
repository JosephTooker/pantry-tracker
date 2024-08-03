// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAdwswpzBB_mXFL9DvhLWycu5pGM1ZhsLQ",
  authDomain: "pantry-tracker-2f866.firebaseapp.com",
  projectId: "pantry-tracker-2f866",
  storageBucket: "pantry-tracker-2f866.appspot.com",
  messagingSenderId: "164966118133",
  appId: "1:164966118133:web:c2f11be0a93b7db8978bbc",
  measurementId: "G-J8Y5M6ST2E"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const firestore = getFirestore(app)

export {firestore}