// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
apiKey: process.env.REACT_APP_FIREBASE_KEY,
  authDomain: "netflix-gpt-55aa3.firebaseapp.com",
  projectId: "netflix-gpt-55aa3",
  storageBucket: "netflix-gpt-55aa3.firebasestorage.app",
  messagingSenderId: "213857595803",
  appId: "1:213857595803:web:59a86847f7cbaa14e9f13e",
  measurementId: "G-C57TXLH2DY"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();
