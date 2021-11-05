import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';

const config = {
  apiKey: "AIzaSyB3EK9ULbgaNIyCjXDZCLLrb5FCGeIyaHQ",
  authDomain: "dac0n-crwn-clothing.firebaseapp.com",
  projectId: "dac0n-crwn-clothing",
  storageBucket: "dac0n-crwn-clothing.appspot.com",
  messagingSenderId: "99055856011",
  appId: "1:99055856011:web:28504f98899897cb8c278e",
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore(    );

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;