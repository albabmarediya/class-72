import firebase from "firebase";
require("@firebase/firestore");

const firebaseConfig = {
    apiKey: "AIzaSyDhjCiA_CFg0Qi44bJHZq0krunmgXougIk",
    authDomain: "e-ride-fd460.firebaseapp.com",
    projectId: "e-ride-fd460",
    storageBucket: "e-ride-fd460.appspot.com",
    messagingSenderId: "453060901307",
    appId: "1:453060901307:web:00bb800b75f9c081ebec9e"
  };

firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
