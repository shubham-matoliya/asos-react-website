import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "@firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyDOrVSEtiwgH9SOEZIqQ9zqn4kmcMBJSa0",
  authDomain: "react-auth-228ea.firebaseapp.com",
  projectId: "react-auth-228ea",
  storageBucket: "react-auth-228ea.appspot.com",
  messagingSenderId: "547888505185",
  appId: "1:547888505185:web:d4de5de19917ab7baa2520",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const Auth = getAuth(app);
export const db = getFirestore(app);
export default app;
