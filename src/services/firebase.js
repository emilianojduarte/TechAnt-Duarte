// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: process.env.REACT_APP_GOOGLE_FIREBASE_API_KEY,
    authDomain: "techant-coderhouse-31120.firebaseapp.com",
    projectId: "techant-coderhouse-31120",
    storageBucket: "techant-coderhouse-31120.appspot.com",
    messagingSenderId: "208378985378",
    appId: "1:208378985378:web:376a2813ff67b72b9a90fb",
    measurementId: "G-5XWYE6PT25"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const database = getFirestore(app);
export default database;