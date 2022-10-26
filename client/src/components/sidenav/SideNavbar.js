import React, { useState } from "react";
import { Link } from "react-router-dom";
import Home from "./../../assets/Home.js";
import Login from "./../../assets/Login.js";
import SignUp from "./../../assets/SignUp.js";
import Playlist from "./../../assets/Playlist.js";
import FindFriend from "./../../assets/FindFriend.js";
import Favourites from "./../../assets/Favourites.js";
import Chat from "./../../assets/Chat.js";
import Menu from "./../../assets/Menu.png";
import "./SideNavbar.css";

export const SideNavbar = ({ auth, setAuth }) => {
  const [toggle, setToggle] = useState(false);
  const logout = () => {
    localStorage.removeItem("data");
    setAuth(null);
  };
  return (
    <div id="navbar" style={{ width: toggle ? "320px" : "90px",background:toggle ? "#f5f5f5":"white"}}>
      <div
        onClick={() => setToggle(!toggle)}
        className={toggle ? `"hamburger-btn open` : "hamburger-btn"}
      >
        <div className="hamburger"></div>
      </div>
      <div className="nav-link-container">
        <Link to="/" className="nav-link">
          <Home className="navIcons"  alt="home" />
          <span className="icon-name" style={{ display: toggle ? "" : "none" }}>
            Home
          </span>
        </Link>

        <Link to="/playlist" className="nav-link">
          <Playlist className="navIcons"  alt="home" />
          <span className="icon-name" style={{ display: toggle ? "" : "none" }}>
            Playlist
          </span>
        </Link>

        <Link to="/favourites" className="nav-link">
          <Favourites className="navIcons" alt="home" />
          <span className="icon-name" style={{ display: toggle ? "" : "none" }}>
            Favourites
          </span>
        </Link>

        <Link to="/chat" className="nav-link">
          <Chat className="navIcons"  alt="home" />
          <span className="icon-name" style={{ display: toggle ? "" : "none" }}>
            Chat
          </span>
        </Link>

        <Link to="/findFriend" className="nav-link">
          <FindFriend className="navIcons"  alt="home" />
          <span className="icon-name" style={{ display: toggle ? "" : "none" }}>
            Find a Friend
          </span>
        </Link>
        {auth ? (
          <Link className="nav-link" onClick={logout}>
            Logout
          </Link>
        ) : (
          <>
            <Link to="/login" className="nav-link">
              <Login className="navIcons"  alt="home" />
              <span
                className="icon-name"
                style={{ display: toggle ? "" : "none" }}
              >
                Login
              </span>
            </Link>

            <Link to="/signUp" className="nav-link">
              <SignUp className="navIcons"  alt="home" />
              <span
                className="icon-name"
                style={{ display: toggle ? "" : "none" }}
              >
                SignUp
              </span>
            </Link>
          </>
        )}
      </div>
    </div>
  );
};