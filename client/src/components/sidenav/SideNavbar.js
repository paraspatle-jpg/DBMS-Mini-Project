import React, { useState } from "react";
import { Link } from "react-router-dom";
import Home from "./../../assets/Home.svg";
import Login from "./../../assets/Login.png";
import SignUp from "./../../assets/SignUp.png";
import Playlist from "./../../assets/Playlist.png";
import FindFriend from "./../../assets/FindFriend.png";
import Favourites from "./../../assets/Favourites.png";
import Chat from "./../../assets/Chat.png";
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
          <img className="navIcons" src={Home} alt="home" />
          <span className="icon-name" style={{ display: toggle ? "" : "none" }}>
            Home
          </span>
        </Link>

        <Link to="/playlist" className="nav-link">
          <img className="navIcons" src={Playlist} alt="home" />
          <span className="icon-name" style={{ display: toggle ? "" : "none" }}>
            Playlist
          </span>
        </Link>

        <Link to="/favourites" className="nav-link">
          <img className="navIcons" src={Favourites} alt="home" />
          <span className="icon-name" style={{ display: toggle ? "" : "none" }}>
            Favourites
          </span>
        </Link>

        <Link to="/chat" className="nav-link">
          <img className="navIcons" src={Chat} alt="home" />
          <span className="icon-name" style={{ display: toggle ? "" : "none" }}>
            Chat
          </span>
        </Link>

        <Link to="/find-a-friend" className="nav-link">
          <img className="navIcons" src={FindFriend} alt="home" />
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
              <img className="navIcons" src={Login} alt="home" />
              <span
                className="icon-name"
                style={{ display: toggle ? "" : "none" }}
              >
                Login
              </span>
            </Link>

            <Link to="/signUp" className="nav-link">
              <img className="navIcons" src={SignUp} alt="home" />
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
