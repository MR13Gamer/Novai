// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore, enableIndexedDbPersistence } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDwmkECMaPAPHRQngO0KAWhKUN4n1-qDQs",
  authDomain: "login-bfd6f.firebaseapp.com",
  projectId: "login-bfd6f",
  storageBucket: "login-bfd6f.firebasestorage.app",
  messagingSenderId: "409526200017",
  appId: "1:409526200017:web:9f74cc46e3cf3455bd07f0",
  measurementId: "G-WK5ZMV4JTJ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const firestore = getFirestore(app);

// Attempt to enable offline persistence
enableIndexedDbPersistence(firestore)
  .catch((err) => {
    if (err.code == 'failed-precondition') {
      // Multiple tabs open, persistence can only be enabled
      // in one tab at a time.
      console.warn('Firestore persistence failed: Multiple tabs open.');
    } else if (err.code == 'unimplemented') {
      // The current browser does not support all of the
      // features required to enable persistence
      console.warn('Firestore persistence not available in this browser.');
    }
  });

export const googleProvider = new GoogleAuthProvider();