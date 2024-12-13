// Import the functions you need from the SDKs you need
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

// import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAWlz0tQ8cZun7kT3aBxpo8sgxLDLCwZKE",
    authDomain: "clone-cbcad.firebaseapp.com",
    projectId: "clone-cbcad",
    storageBucket: "clone-cbcad.appspot.com",
    messagingSenderId: "268723244397",
    appId: "1:268723244397:web:8aa3d35ded67e633769e64",
    measurementId: "G-3WVM2GST7N"
};

// Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };


