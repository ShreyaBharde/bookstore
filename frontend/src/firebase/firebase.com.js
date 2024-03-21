// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "api key",
  authDomain: "mern-book-inventory-832a1.firebaseapp.com",
  projectId: "mern-book-inventory-832a1",
  storageBucket: "mern-book-inventory-832a1.appspot.com",
  messagingSenderId: "135463762712",
  appId: "1:135463762712:web:7ee47e973c5cf26c567c6d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;
