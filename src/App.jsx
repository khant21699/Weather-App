import "./App.css";
import React from "react";
import Signin from "./Signin";
import { AuthContextProvider, UseAuth } from "./Context/AuthContext";
import Home from "./Home";

function App() {
  const { userExist } = UseAuth();
  return (
    <div className="App">
      {!userExist ? <Signin /> : <Home />}
      {/* <Home /> */}
    </div>
  );
}
document.title = "Weather App";
function Root() {
  return (
    <AuthContextProvider>
      <App />
    </AuthContextProvider>
  );
}

export default Root;
