// ./src/firebase.js
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAJtQOswNFwRZS1VSOW9esddDxOEwS2f_U",
  authDomain: "portfolio-website-9cf6a.firebaseapp.com",
  projectId: "portfolio-website-9cf6a",
  storageBucket: "portfolio-website-9cf6a.appspot.com",
  messagingSenderId: "775836195215",
  appId: "1:775836195215:web:7f5b06a5a6f72727da93fa",
  measurementId: "G-E7XVGWLYTJ"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Firestore
const db = getFirestore(app);
export { db };
