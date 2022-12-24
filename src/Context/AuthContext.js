import { createContext, useContext, useEffect, useState } from "react";
import React from "react";
import { GoogleAuthProvider, signInWithPopup, signOut } from "firebase/auth";
import { auth } from "../firebase";

const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
  //   const googleSignIn = () => {
  //     const provider = new GoogleAuthProvider();
  //     signInWithPopup(auth, provider);
  //   };
  const provider = new GoogleAuthProvider();
  const [userExist, setUserExist] = useState(false);
  const [user, setUser] = useState(null);
  const googleSignIn = () => {
    signInWithPopup(auth, provider).then((data) => {
      setUser(data.user);
      localStorage.setItem("User", data.user);
      setUserExist(true);
    });
  };
  const SignOut = () => {
    signOut(auth).then(() => {
      setUserExist(false);
      setUser(null);
    });
  };

  useEffect(() => {
    setUser(localStorage.getItem("User"));
    console.log(user);
  }, []);

  return (
    <AuthContext.Provider value={{ googleSignIn, user, userExist, SignOut }}>
      {children}
    </AuthContext.Provider>
  );
};

export const UseAuth = () => {
  return useContext(AuthContext);
};
