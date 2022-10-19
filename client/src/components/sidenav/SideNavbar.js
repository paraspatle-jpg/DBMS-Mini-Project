import React from "react";
import { Link } from "react-router-dom";
import "./SideNavbar.css";
export const SideNavbar = ({ auth, setAuth }) => {
  const logout = () => {
    localStorage.removeItem("data");
    setAuth(null);
  };
  return (
    <div id="navbar">
      <Link to="/" className="nav-link">
        Home
      </Link>

      <Link to="/playlist" className="nav-link">
        Playlist
      </Link>

      <Link to="/favourites" className="nav-link">
        Favourites
      </Link>

      <Link to="/chat" className="nav-link">
        Chat
      </Link>

      <Link to="/find-a-friend" className="nav-link">
        Find a Friend
      </Link>
      {auth ? (
        <Link className="nav-link" onClick={logout}>
          Logout
        </Link>
      ) : (
        <>
          <Link to="/login" className="nav-link">
            Login
          </Link>

          <Link to="/signUp" className="nav-link">
            SignUp
          </Link>
        </>
      )}
    </div>
  );
};
