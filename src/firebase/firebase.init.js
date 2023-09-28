// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCJobb4zxRHUiPJb1viFmxdptktQkftKJo",
    authDomain: "simple-firebase-6d78d.firebaseapp.com",
    projectId: "simple-firebase-6d78d",
    storageBucket: "simple-firebase-6d78d.appspot.com",
    messagingSenderId: "467252586688",
    appId: "1:467252586688:web:52009d67f85f39182e6525",
    measurementId: "G-KS2EEN81LE"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;