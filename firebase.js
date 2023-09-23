// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCkxRklesSfWJGMF6PRqo3moOksrN5UplA",
  authDomain: "mdi-k-2992b.firebaseapp.com",
  projectId: "mdi-k-2992b",
  storageBucket: "mdi-k-2992b.appspot.com",
  messagingSenderId: "590443816067",
  appId: "1:590443816067:web:dce8adeee2c3614e4527b6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore();
const auth = getAuth();
export { db, auth};