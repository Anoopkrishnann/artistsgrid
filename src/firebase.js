// src/firebase.js or src/app/firebase.js

import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"; // ✅ Add this
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyDHuq54iT6lgqKD04VVRUUGvlkMOhQlRck",
  authDomain: "artists-grid.firebaseapp.com",
  projectId: "artists-grid",
  storageBucket: "artists-grid.appspot.com",
  messagingSenderId: "190764030228",
  appId: "1:190764030228:web:b07375e97f873b6d960a01",
  measurementId: "G-2YYP5L0VQ6",
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app); // ✅ Initialize auth

export { auth }; // ✅ Export auth so you can use it in login
