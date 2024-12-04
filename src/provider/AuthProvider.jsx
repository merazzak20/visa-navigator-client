import { GoogleAuthProvider } from "firebase/auth/web-extension";
import React, { createContext, useState } from "react";
import { auth } from "../firebase/firebase.cnfig";
import { createUserWithEmailAndPassword, signInWithPopup } from "firebase/auth";

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const googleProvider = new GoogleAuthProvider();
  const createNewUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const googleSignIn = () => {
    return signInWithPopup(auth, googleProvider);
  };
  const authInfo = {
    user,
    createNewUser,
    googleSignIn,
  };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
