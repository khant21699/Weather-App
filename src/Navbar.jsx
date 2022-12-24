import React, { useRef } from "react";
import { UseAuth } from "./Context/AuthContext";
import "./Navbar.css";

const Navbar = () => {
  var citydata = null;
  const inputRef = useRef();
  const { user, userExist, SignOut, getCity, city } = UseAuth();
  const handleSignout = () => {
    SignOut();
  };

  const handleSearch = (e) => {
    e.preventDefault();
    getCity(citydata);
    console.log(city);
    inputRef.current.value = null;
  };

  return (
    <div className="navBar">
      <div className="profile">
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
      </div>
      <div className="search">
        <input
          type="text"
          placeholder="Enter City"
          ref={inputRef}
          onChange={(e) => {
            e.preventDefault();
            citydata = e.target.value;
          }}
        />
        <button onClick={handleSearch}>Search</button>
      </div>
      <button className="signout" onClick={handleSignout}>
        Sign Out
      </button>
    </div>
  );
};

export default Navbar;
