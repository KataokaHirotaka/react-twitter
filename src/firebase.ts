import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import "firebase/storage";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASSE_APIKEY,
  authDomain: process.env.REACT_APP_FIREBASSE_DOMAIN,
  databaseURL: process.env.REACT_APP_FIREBASSE_DATABASE,
  projectId: process.env.REACT_APP_FIREBASSE_PROJECT_ID,
  storageBucket: process.env.REACT_APP_FIREBASSE_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_FIREBASSE_SENDER_ID,
  appId: process.env.REACT_APP_FIREBASSE_APP_ID,
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

export const db = firebaseApp.firestore();
export const auth = firebase.auth();
export const storage = firebase.storage();
export const provider = new firebase.auth.GoogleAuthProvider();
