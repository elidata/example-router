import { initializeApp } from "firebase/app";
import {getFirestore, collection} from "firebase/firestore" ;

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
// Import the functions you need from the SDKs you need
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBZDbnlhVfYoghN9FiQ1LxfXXBGIuHI1gU",
  authDomain: "elis-school.firebaseapp.com",
  databaseURL: "https://elis-school-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "elis-school",
  storageBucket: "elis-school.appspot.com",
  messagingSenderId: "66695749978",
  appId: "1:66695749978:web:889143c34eef807ba75363",
  measurementId: "G-J35MZF7PHD"
};


// Initialize Firebase
export const  app = initializeApp(firebaseConfig);
//export const db = getFirestore(app) ;