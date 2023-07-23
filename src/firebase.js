// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCY7IdjuYMg-k9ZxK9k-aGxIZyMPowgOOE",
  authDomain: "podcastreactapp.firebaseapp.com",
  projectId: "podcastreactapp",
  storageBucket: "podcastreactapp.appspot.com",
  messagingSenderId: "767880371841",
  appId: "1:767880371841:web:133712fcde8db33eca3780",
  measurementId: "G-EJ2YV7GL75"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


const db = getFirestore(app);
const storage = getStorage(app);
const auth = getAuth(app);

export { auth, db, storage };
