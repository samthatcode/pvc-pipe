// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// import firebase from 'firebase'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDH_MPoFCf2SMg4Jx3wtZJKJFbc8eJSESM",
  authDomain: "abdrahman-oladimeji.firebaseapp.com",
  projectId: "abdrahman-oladimeji",
  storageBucket: "abdrahman-oladimeji.appspot.com",
  messagingSenderId: "866130121015",
  appId: "1:866130121015:web:b30ee2c3ea597db9184ab2",
  measurementId: "G-NG5MS2YL0K",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const authentication = getAuth(app);
