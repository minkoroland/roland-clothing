import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';

const config = {
    apiKey: "AIzaSyCIPbWHUvdljYeWo4Ue9zjDCyGE13fPTaM",
    authDomain: "roland-clothing.firebaseapp.com",
    projectId: "roland-clothing",
    storageBucket: "roland-clothing.appspot.com",
    messagingSenderId: "1096103188527",
    appId: "1:1096103188527:web:72e19cb44ebe8110444eda",
    measurementId: "${config.measurementId}"
  };

firebase.initializeApp(config)

export const auth = firebase.auth();
export const firestore = firebase.firestore();

// google bejelentkezés
const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt: 'select_account'})
export const signInWithGoogle = () => auth.signInWithPopup(provider)

export default firebase;