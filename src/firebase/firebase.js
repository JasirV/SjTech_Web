// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBboKgOfQXlpH38YPQ0qkof-veaqEv4xS8",
  authDomain: "sjtech-7a199.firebaseapp.com",
  projectId: "sjtech-7a199",
  storageBucket: "sjtech-7a199.firebasestorage.app",
  messagingSenderId: "665059774788",
  appId: "1:665059774788:web:36baa104db11c292aec711"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);
const storage = getStorage(app);
export { db ,auth,storage };