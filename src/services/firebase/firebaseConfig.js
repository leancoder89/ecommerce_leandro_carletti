import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyDzhgX5vdI_xm6DEwjRyFt5rSlSyqh_iJQ",
    authDomain: "yerba-mate-store-lean-carletti.firebaseapp.com",
    projectId: "yerba-mate-store-lean-carletti",
    storageBucket: "yerba-mate-store-lean-carletti.appspot.com",
    messagingSenderId: "946710403683",
    appId: "1:946710403683:web:caa9ed6d38b7682f497656"
};


const app = initializeApp(firebaseConfig);

export const db = getFirestore(app)