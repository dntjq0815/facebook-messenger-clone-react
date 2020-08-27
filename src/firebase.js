import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyCsFz3cWBdv7J9fCkCo48IDsp3uJuMck_E",
    authDomain: "facebook-messenger-clone-ce91e.firebaseapp.com",
    databaseURL: "https://facebook-messenger-clone-ce91e.firebaseio.com",
    projectId: "facebook-messenger-clone-ce91e",
    storageBucket: "facebook-messenger-clone-ce91e.appspot.com",
    messagingSenderId: "29877572369",
    appId: "1:29877572369:web:16f7cd93abc6be2debf2b0",
    measurementId: "G-V048TN7MTZ"     
});

const db = firebaseApp.firestore();

export default db;