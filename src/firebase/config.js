import * as firebase from 'firebase/app';
import 'firebase/storage';
import 'firebase/firestore';

let firebaseConfig = {
    apiKey: "AIzaSyAqRC7XZ4fDl1yBUdgyZ_zxWDZzTPEGNdM",
    authDomain: "cousin-camp.firebaseapp.com",
    databaseURL: "https://cousin-camp.firebaseio.com",
    projectId: "cousin-camp",
    storageBucket: "cousin-camp.appspot.com",
    messagingSenderId: "1075314265466",
    appId: "1:1075314265466:web:1519fab3bd3f0cfed7dac3",
    measurementId: "G-R6N3P58Y92"
  };
  // Initialize Firebase
    console.log('firebase config')
  firebase.initializeApp(firebaseConfig);

  const projectStorage = firebase.storage();
  const projectFirestore = firebase.firestore();

  const timestamp = firebase.firestore.FieldValue.serverTimestamp;

  export { projectStorage, projectFirestore, timestamp };
