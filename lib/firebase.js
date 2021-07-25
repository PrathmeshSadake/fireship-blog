import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyDfG9B78FXoy7a4Yw_FTcGCHEijW1L_oLY",
  authDomain: "fireshipblog-ab237.firebaseapp.com",
  projectId: "fireshipblog-ab237",
  storageBucket: "fireshipblog-ab237.appspot.com",
  messagingSenderId: "5802179251",
  appId: "1:5802179251:web:471888bd5f635a135a4ec6",
};

// NextJS can automatically initialize app more than one time and this will throw error.
// Therefore initialize Firebase when app length is 0.
if (firebase.apps.length === 0) {
  firebase.initializeApp(firebaseConfig);
}

export const auth = firebase.auth();
export const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

export const firestore = firebase.firestore();
export const storage = firebase.storage();
