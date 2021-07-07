import firebase from "firebase";

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyDI7lBdsmubhRPOJqYW7Oel8ozJWfFlvBk",
  authDomain: "habit-nofap.firebaseapp.com",
  projectId: "habit-nofap",
  storageBucket: "habit-nofap.appspot.com",
  messagingSenderId: "890961738896",
  appId: "1:890961738896:web:071d20db07eb187142ac15",
};
// Initialize Firebase
const fire = firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
export { fire, db };
