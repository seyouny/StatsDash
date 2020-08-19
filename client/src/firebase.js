import * as firebase from "firebase/app";
import "firebase/auth";

const app = firebase.initializeApp({
    apiKey: "AIzaSyA_dGgjiu-4cVcFCvzZPzRx3TotfF5TxXE",
    authDomain: "stat-dash-8bab6.firebaseapp.com",
    databaseURL: "https://stat-dash-8bab6.firebaseio.com",
    projectId: "stat-dash-8bab6",
    storageBucket: "stat-dash-8bab6.appspot.com",
    messagingSenderId: "842615417049",
    appId: "1:842615417049:web:49ff0e1bd8931b4e6b76c8",
    measurementId: "G-2D7GQDG972"
})

export default app;