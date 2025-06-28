// src/firebase.js
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyByUtItymkh0Lp9vnkReB3jLJaSoKCllxc",
  authDomain: "chattermood-realtime.firebaseapp.com",
  projectId: "chattermood-realtime",
  storageBucket: "chattermood-realtime.firebasestorage.app",
  messagingSenderId: "534117355004",
  appId: "1:534117355004:web:55124df54a4586a0743679"
};
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);