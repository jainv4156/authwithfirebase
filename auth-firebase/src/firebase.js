// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from  "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBm9BpNOSdilwSOAxGRwrR7hAzH9v-GFIo",
  authDomain: "iqnaut-dc883.firebaseapp.com",
  projectId: "iqnaut-dc883",
  storageBucket: "iqnaut-dc883.appspot.com",
  messagingSenderId: "489779223675",
  appId: "1:489779223675:web:a334898e07a55742d1d6de",
  measurementId: "G-0LGZJPX4HY"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth();

