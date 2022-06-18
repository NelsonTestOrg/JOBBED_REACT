// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyA6XJYXZQ6wTVX8dNuZkP6s3Z6ai7SUEak",
    authDomain: "gigr-react.firebaseapp.com",
    projectId: "gigr-react",
    storageBucket: "gigr-react.appspot.com",
    messagingSenderId: "299673056142",
    appId: "1:299673056142:web:5021b072b300ee1d83aadf",
    measurementId: "G-6MNYEWHTCK"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const db = getFirestore();