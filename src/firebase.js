// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBxgFiKTTouUHVyesNGTdSbW_l0AGUaOmE",
  authDomain: "netflix-movie-d5784.firebaseapp.com",
  projectId: "netflix-movie-d5784",
  storageBucket: "netflix-movie-d5784.appspot.com",
  messagingSenderId: "521180468440",
  appId: "1:521180468440:web:39af2f2e9fb3446694b3ad",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
