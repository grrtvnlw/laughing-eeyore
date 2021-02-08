import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: "AIzaSyD6g1MMJvP1iFu6oyX1En3cXKyUrObEzgI",
  authDomain: "laughing-eeyore-db.firebaseapp.com",
  projectId: "laughing-eeyore-db",
  storageBucket: "laughing-eeyore-db.appspot.com",
  messagingSenderId: "160589722303",
  appId: "1:160589722303:web:ab8708401074e32180cc0a",
  measurementId: "G-N7M4TQZFRZ"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
