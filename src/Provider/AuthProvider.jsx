import React, { createContext, useState } from "react";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { auth } from "../firebase/firebase.config";

export const AuthContext = createContext();
function AuthProvider({ children }) {
  const [user, setUSer] = useState(null);

  const createUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };
  const signInUser = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };
  const authData = {
    user,
    createUser,
    signInUser,
  };
  return <AuthContext value={authData}>{children}</AuthContext>;
}

export default AuthProvider;
