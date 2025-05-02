import React, { createContext, useState } from "react";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
} from "firebase/auth";
import { auth } from "../firebase/firebase.config";
import { useEffect } from "react";

export const AuthContext = createContext();
function AuthProvider({ children }) {
  const [user, setUSer] = useState(null);

  const createUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };
  const signInUser = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  const singOutUser = () => {
    return signOut(auth);
  };

  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUSer(currentUser);
    });

    return () => {
      unSubscribe();
    };
  }, []);
  const authData = {
    user,
    createUser,
    signInUser,
    singOutUser,
  };
  return <AuthContext value={authData}>{children}</AuthContext>;
}

export default AuthProvider;
