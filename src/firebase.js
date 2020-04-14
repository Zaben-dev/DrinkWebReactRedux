import firebase from "firebase/app";
import "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyD93AFslU12ctOntkGZbH8UTvGDAa0xEbA",
    authDomain: "clicker-game-693a1.firebaseapp.com",
    databaseURL: "https://clicker-game-693a1.firebaseio.com",
    projectId: "clicker-game-693a1",
    storageBucket: "clicker-game-693a1.appspot.com",
    messagingSenderId: "731202909137",
    appId: "1:731202909137:web:adf7125c728ee80c3866f0"
  };

firebase.initializeApp(firebaseConfig);
export const auth = firebase.auth();
