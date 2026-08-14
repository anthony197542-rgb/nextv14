// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAPBMYMorXEyQgnemT1QkEdggPr_QVJSfI",
  authDomain: "next14-cc-6c06f.firebaseapp.com",
  databaseURL: "https://next14-cc-6c06f-default-rtdb.firebaseio.com",
  projectId: "next14-cc-6c06f",
  storageBucket: "next14-cc-6c06f.firebasestorage.app",
  messagingSenderId: "774590679731",
  appId: "1:774590679731:web:253cfb4d0e2c0978a87ec6",
  measurementId: "G-RPD1SHLBDN"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)