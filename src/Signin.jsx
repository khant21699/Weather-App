import React from "react";
import { UseAuth } from "./Context/AuthContext";
import "./Signin.css";
import { GoogleButton } from "react-google-button";

const Signin = () => {
  const { googleSignIn } = UseAuth();
  const handleGoogleSignin = () => {
    googleSignIn();
  };
  return (
    <div className="signIn">
      <h1>Welcome To Weather App</h1>
      <GoogleButton className="google__Button" onClick={handleGoogleSignin} />
    </div>
  );
};

export default Signin;
