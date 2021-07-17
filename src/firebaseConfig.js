import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/storage";

const firebaseConfig = {
    apiKey: "AIzaSyCM3NHKHah8qfR9nx3GAo4GEmNoNPgsOSo",
    authDomain: "unik-bda71.firebaseapp.com",
    projectId: "unik-bda71",
    storageBucket: "unik-bda71.appspot.com",
    messagingSenderId: "222254454680",
    appId: "1:222254454680:web:afa37a2f545a1029a53ded"
  };
  
  firebase.initializeApp(firebaseConfig);

  export const db = firebase.firestore()
  export const storage = firebase.storage()