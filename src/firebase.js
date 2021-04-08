import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyCaXvW61n6DfuliGGtJ8YuklZlg64riv_A",
  authDomain: "to-do-app-c1dea.firebaseapp.com",
  projectId: "to-do-app-c1dea",
  storageBucket: "to-do-app-c1dea.appspot.com",
  messagingSenderId: "494052334493",
  appId: "1:494052334493:web:d3368e3b99e9bc3b4c6d74",
  measurementId: "G-PB8XF7ZMBZ",
});

const db = firebaseApp.firestore();

export default db;
