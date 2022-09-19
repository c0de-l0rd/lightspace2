// Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// import firebase from 'firebase/compat/app';
// import 'firebase/compat/auth';
// import "firebase/firestore";

import { initializeApp, getApp } from 'firebase/app';
import { initializeFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyB-1aqf37LfljZhNZCspQgCEU4ZV-HOGfw",
    authDomain: "ligh-a30fb.firebaseapp.com",
    projectId: "ligh-a30fb",
    storageBucket: "ligh-a30fb.appspot.com",
    messagingSenderId: "1093033272429",
    appId: "1:1093033272429:web:2cbbf8e5770a2c854a4b64"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = initializeFirestore(app, {experimentalForceLongPolling: true});

export  {auth, db};