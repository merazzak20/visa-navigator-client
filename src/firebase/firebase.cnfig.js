// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAM0S35PFozEGzvU9tEqnr8J-5_-XJfSkI",
  authDomain: "assignment-10-6510b.firebaseapp.com",
  projectId: "assignment-10-6510b",
  storageBucket: "assignment-10-6510b.firebasestorage.app",
  messagingSenderId: "372201131809",
  appId: "1:372201131809:web:6a6e507c7f427f971af860",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
