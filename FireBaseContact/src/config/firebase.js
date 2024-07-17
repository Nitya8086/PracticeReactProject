// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD2qNSkt2--cBYnxiv5I0aX-qZXChp6THg",
  authDomain: "vite-contact-be307.firebaseapp.com",
  projectId: "vite-contact-be307",
  storageBucket: "vite-contact-be307.appspot.com",
  messagingSenderId: "858901799665",
  appId: "1:858901799665:web:ccf5e2fd775a310ec7ff50"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);