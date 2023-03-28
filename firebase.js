// Import the functions you need from the SDKs you need
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth'
import 'firebase/compat/database'
import {getAuth} from "firebase/auth"

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyA7NAaL6Sl9sZ2gRoQi97w6J8-urpVX0nc",
    authDomain: "olympus-app-9d635.firebaseapp.com",
    projectId: "olympus-app-9d635",
    storageBucket: "olympus-app-9d635.appspot.com",
    messagingSenderId: "526654239507",
    appId: "1:526654239507:web:e49136e3a5746a8e1560e6",
    measurementId: "G-BNY8WBLRG2",
    databaseURL: "https://olympus-app-9d635-default-rtdb.firebaseio.com/",
  };


// Initialize Firebase
let app;
if (firebase.apps.length === 0) {
    app = firebase.initializeApp(firebaseConfig);
} else {
    app = firebase.app();
}
const auth = getAuth();
const db = app.database();
export {db, auth};
