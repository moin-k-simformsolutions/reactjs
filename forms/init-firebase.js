  // const firebase = require("firebase");
// import firebase from "firbase";
import firebase from "firebase"
// require("firebase/firestore");
// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyBHrSEtoIu_GIWD_YtX_2hIk3vQzOYtSps",
    authDomain: "task-tracker-795a3.firebaseapp.com",
    projectId: "task-tracker-795a3",
    storageBucket: "task-tracker-795a3.appspot.com",
    messagingSenderId: "47798774870",
    appId: "1:47798774870:web:6ffad5c863aa5073ffdff7"
  };
  // Required for side-effects
  firebase.initializeApp(firebaseConfig);
  var db=firebase.firestore();
  export const firestore=firebase.firestore;
  export default db;