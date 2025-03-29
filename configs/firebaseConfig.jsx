// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY || "your-api-key-here", // Fallback for testing only
  authDomain: "clip-craft-ai-48685.firebaseapp.com",
  projectId: "clip-craft-ai-48685",
  storageBucket: "clip-craft-ai-48685.firebasestorage.app",
  messagingSenderId: "589035923605",
  appId: "1:589035923605:web:56301f773805469963139c",
  measurementId: "G-S70T5VERRC"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);