import React from "react";
import { UseAuth } from "./Context/AuthContext";
import "./Navbar.css";

const Navbar = () => {
  const { user, userExist, SignOut } = UseAuth();
  const handleSignout = () => {
    SignOut();
  };
  return (
    <div className="navBar">
      {userExist ? (
        <img src={user.photoURL} alt="" />
      ) : (
        <img
          src="https://www.pngitem.com/pimgs/m/150-1503945_transparent-user-png-default-user-image-png-png.png"
          alt=""
        />
      )}
      {userExist ? (
        <h1 className="user__Name">{user.displayName}</h1>
      ) : (
        <h1 className="user__Name">UserName</h1>
      )}
      <button className="signout" onClick={handleSignout}>
        Sign Out
      </button>
    </div>
  );
};

export default Navbar;
