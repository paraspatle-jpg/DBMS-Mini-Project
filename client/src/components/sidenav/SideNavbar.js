import React, { useState } from "react";
import { Link } from "react-router-dom";
import Home from "./../../assets/Home.js";
import Login from "./../../assets/Login.js";
import SignUp from "./../../assets/SignUp.js";
import Playlist from "./../../assets/Playlist.js";
import FindFriend from "./../../assets/FindFriend.js";
import Favourites from "./../../assets/Favourites.js";
import Chat from "./../../assets/Chat.js";
import { useColorMode } from "../../hooks/useColorMode";
import { Logout } from "../../assets/Logout.js";
import "./SideNavbar.css";

export const SideNavbar = ({ auth, setAuth }) => {
  const logout = () => {
    localStorage.removeItem("data");
    setAuth(null);
  };

  const ChangeColor = () => {
    return useColorMode("black", "#f5f5f5");
  };

  const [toggle, setToggle] = useState(false);
  return (
    <div
      id="navbar"
      style={{
        width: toggle ? "320px" : "90px",
        background: useColorMode("#f5f5f5", "black"),
        color: useColorMode("black", "#f5f5f5"),
      }}
    >
      <div
        onClick={() => setToggle(!toggle)}
        className={toggle ? `"hamburger-btn open` : "hamburger-btn"}
      >
        <div className={useColorMode("hamburger", "hamburger dark")}></div>
      </div>
      <div className="nav-link-container">
        <Link
          to="/"
          className="nav-link"
          style={{
            color: useColorMode("black", "#f5f5f5"),
          }}
          onMouseOver={(e) => {
            e.currentTarget.style.color = "#f86969";
          }}
          onMouseOut={(e) =>
            (e.currentTarget.style.color =
              localStorage.getItem("theme") === "dark" ? "#f5f5f5" : "black")
          }
        >
          <Home />

          <span className="icon-name" style={{ display: toggle ? "" : "none" }}>
            Home
          </span>
        </Link>

        <Link
          to="/playlist"
          className="nav-link"
          style={{
            color: useColorMode("black", "#f5f5f5"),
          }}
          onMouseOver={(e) => {
            e.currentTarget.style.color = "#f86969";
          }}
          onMouseOut={(e) =>
            (e.currentTarget.style.color =
              localStorage.getItem("theme") === "dark" ? "#f5f5f5" : "black")
          }
        >
          <Playlist />

          <span className="icon-name" style={{ display: toggle ? "" : "none" }}>
            Playlist
          </span>
        </Link>

        <Link
          to="/favourites"
          className="nav-link"
          style={{
            color: useColorMode("black", "#f5f5f5"),
          }}
          onMouseOver={(e) => {
            e.currentTarget.style.color = "#f86969";
          }}
          onMouseOut={(e) =>
            (e.currentTarget.style.color =
              localStorage.getItem("theme") === "dark" ? "#f5f5f5" : "black")
          }
        >
          <Favourites />

          <span className="icon-name" style={{ display: toggle ? "" : "none" }}>
            Favourites
          </span>
        </Link>

        <Link
          to="/chat"
          className="nav-link"
          style={{
            color: useColorMode("black", "#f5f5f5"),
          }}
          onMouseOver={(e) => {
            e.currentTarget.style.color = "#f86969";
          }}
          onMouseOut={(e) =>
            (e.currentTarget.style.color =
              localStorage.getItem("theme") === "dark" ? "#f5f5f5" : "black")
          }
        >
          <Chat />

          <span className="icon-name" style={{ display: toggle ? "" : "none" }}>
            Chat
          </span>
        </Link>

        <Link
          to="/findFriend"
          className="nav-link"
          style={{
            color: useColorMode("black", "#f5f5f5"),
          }}
          onMouseOver={(e) => {
            e.currentTarget.style.color = "#f86969";
          }}
          onMouseOut={(e) =>
            (e.currentTarget.style.color =
              localStorage.getItem("theme") === "dark" ? "#f5f5f5" : "black")
          }
        >
          <FindFriend />

          <span className="icon-name" style={{ display: toggle ? "" : "none" }}>
            Find a Friend
          </span>
        </Link>
        {auth ? (
          <div
            className="nav-link"
            style={{
              color: ChangeColor,
            }}
            onClick={logout}
            onMouseOver={(e) => {
              e.currentTarget.style.color = "#f86969";
            }}
            onMouseOut={(e) =>
              (e.currentTarget.style.color =
                localStorage.getItem("theme") === "dark" ? "#f5f5f5" : "black")
            }
          >
            <Logout />
            <span
              className="icon-name"
              style={{ display: toggle ? "" : "none", marginTop: "25px" }}
            >
              Logout
            </span>
          </div>
        ) : (
          <>
            <Link
              to="/login"
              className="nav-link"
              style={{
                color: ChangeColor,
              }}
              onMouseOver={(e) => {
                e.currentTarget.style.color = "#f86969";
              }}
              onMouseOut={(e) =>
                (e.currentTarget.style.color =
                  localStorage.getItem("theme") === "dark"
                    ? "#f5f5f5"
                    : "black")
              }
            >
              <Login />

              <span
                className="icon-name"
                style={{ display: toggle ? "" : "none" }}
              >
                Login
              </span>
            </Link>

            <Link
              to="/signUp"
              className="nav-link"
              style={{
                color: ChangeColor,
              }}
              onMouseOver={(e) => {
                e.currentTarget.style.color = "#f86969";
              }}
              onMouseOut={(e) =>
                (e.currentTarget.style.color =
                  localStorage.getItem("theme") === "dark"
                    ? "#f5f5f5"
                    : "black")
              }
            >
              <SignUp />

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
