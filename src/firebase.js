// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { getAuth } from "firebase/auth";

//import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDmjYFhEC6-GB5CqXsqwUF9dZVS62QDhxY",
  authDomain: "react-podcastplatform.firebaseapp.com",
  projectId: "react-podcastplatform",
  storageBucket: "react-podcastplatform.appspot.com",
  messagingSenderId: "727228882062",
  appId: "1:727228882062:web:366c12a1bee0ad8136fddf",
  measurementId: "G-75PNRE39QS"
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);


const db = getFirestore(app);
const storage = getStorage(app);
const auth = getAuth(app);

export { auth, db, storage };
