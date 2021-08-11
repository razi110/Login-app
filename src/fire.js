 import firebase from "firebase";
 
 // Your web app's Firebase configuration
 var firebaseConfig = {
    apiKey: "AIzaSyBNcWvL2y-bOIMRxOb-9TRlwB4En_bKAnc",
    authDomain: "login-6261a.firebaseapp.com",
    projectId: "login-6261a",
    storageBucket: "login-6261a.appspot.com",
    messagingSenderId: "264911819109",
    appId: "1:264911819109:web:3aaa4d522dcf6c5a9a918c"
  };
  // Initialize Firebase
  const fire = firebase.initializeApp(firebaseConfig);

  export default fire;