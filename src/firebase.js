import * as firebase from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyAc_6_TpLfSyceLVk5PJJ2YAR1XaMNMjCk",
  authDomain: "drinks-reviews.firebaseapp.com",
  databaseURL: "https://drinks-reviews.firebaseio.com",
  projectId: "drinks-reviews",
  storageBucket: "drinks-reviews.appspot.com",
  messagingSenderId: "670633943585",
  appId: "1:670633943585:web:456b811af405e5c6c1b960",
  measurementId: "G-4R3KG2BL17"
  };

firebase.initializeApp(firebaseConfig);

export default firebase;
