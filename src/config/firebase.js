import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

var firebaseConfig = {
    apiKey: "AIzaSyCXRaZ9d7oplN-ADws9iDSA86NmiSThkxw",
    authDomain: "wokeselectiveprocess.firebaseapp.com",
    projectId: "wokeselectiveprocess",
    storageBucket: "wokeselectiveprocess.appspot.com",
    messagingSenderId: "891094980240",
    appId: "1:891094980240:web:70518221f4f59beaa66a15",
    measurementId: "G-Y1VF2E0G5N"
  };

if(!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}

export const fireAuth = firebase.auth();
export const fireStore = firebase.firestore();