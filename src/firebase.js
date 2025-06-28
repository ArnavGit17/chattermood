// src/firebase.js
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDAlboF7iXq2mwKO7gYcXGKQ1Ix1et6PJA",
  authDomain: "chattermood-26151.firebaseapp.com",
  projectId: "chattermood-26151",
  storageBucket: "chattermood-26151.firebasestorage.app",
  messagingSenderId: "532481022826",
  appId: "1:532481022826:web:5d8675a810fb859a5ae313"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
