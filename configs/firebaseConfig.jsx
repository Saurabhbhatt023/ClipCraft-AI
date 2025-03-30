
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY || "your-api-key-here", 
  authDomain: "clip-craft-ai-48685.firebaseapp.com",
  projectId: "clip-craft-ai-48685",
  storageBucket: "clip-craft-ai-48685.firebasestorage.app",
  messagingSenderId: "589035923605",
  appId: "1:589035923605:web:56301f773805469963139c",
  measurementId: "G-S70T5VERRC"
};


const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);