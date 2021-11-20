import firebase from "@firebase/app-compat";
import 'firebase/firestore';

const firestore = firebase.firestore();

firestore.collection('users').doc('plFpZURqtlPVtlg1U9R6').collection('cart-items').doc('6kGUHuz7x4ArwohfyWNx');
firestore.doc('/users/plFpZURqtlPVtlg1U9R6/cart-items/6kGUHuz7x4ArwohfyWNx');
firestore.collection('/users/plFpZURqtlPVtlg1U9R6/cart-items');