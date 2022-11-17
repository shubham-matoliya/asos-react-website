import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "@firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCIoy4gS_tkc5s7Toi6YE3n3W1So3x4HTU",
  authDomain: "react-ecommerce-c0d8a.firebaseapp.com",
  projectId: "react-ecommerce-c0d8a",
  storageBucket: "react-ecommerce-c0d8a.appspot.com",
  messagingSenderId: "977244290471",
  appId: "1:977244290471:web:98ad7793dca79a2bb08a82",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const Auth = getAuth(app);
export const db = getFirestore(app);
export default app;
