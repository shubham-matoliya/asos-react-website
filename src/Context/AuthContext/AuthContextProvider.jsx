import React, { createContext, useState, useEffect } from "react";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";
import { Auth } from "../../Firebase/firebase";
export const AuthContext = createContext();
const AuthContextProvider = ({ children }) => {
  const [user, setUser] = useState("");
  const [isAdmin, setIsAdmin] = useState(
    localStorage.getItem("admin-status") || false
  );

  function setUserAsAdmin() {
    setIsAdmin(!isAdmin);
    localStorage.setItem("admin-status", isAdmin);
  }
  function signUp(email, password) {
    return createUserWithEmailAndPassword(Auth, email, password);
  }
  function logIn(email, password) {
    return signInWithEmailAndPassword(Auth, email, password);
  }
  function logOut() {
    signOut(Auth);
    setIsAdmin(false);
    localStorage.setItem("admin-status", false);
  }
  function googleSignIn() {
    const google_Auth_Provider = new GoogleAuthProvider();
    return signInWithPopup(Auth, google_Auth_Provider);
  }
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(Auth, (currentUser) => {
      setUser(currentUser);
    });
    // this will run when component unmount
    return () => {
      unsubscribe();
    };
  }, []);
  return (
    <AuthContext.Provider
      value={{
        user,
        signUp,
        logIn,
        logOut,
        googleSignIn,
        setUserAsAdmin,
        isAdmin,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContextProvider;
