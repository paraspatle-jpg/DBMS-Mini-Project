import React, { useState, useEffect } from "react";
import "./App.css";
import { Header } from "./components/header/Header";
import { SideNavbar } from "./components/sidenav/SideNavbar";
import { Login } from "./pages/login/Login";
import { SignUp } from "./pages/signup/SignUp";
import { Homepage } from "./pages/homepage/Homepage";
import { FindFriend } from "./pages/findFriend/FindFriend";
import { Chat } from "./pages/chat/Chat";
import { Favourites } from "./pages/favourites/Favourites";
import { Playlist } from "./pages/playlist/Playlist";
import { ToastContainer } from "react-toastify";
import shazam from "./apis/shazamApi";
import "react-toastify/dist/ReactToastify.css";
import { toast } from "react-toastify";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import axios from "axios";

function App() {
  const [auth, setAuth] = useState(localStorage.getItem("data"));
  const [favourites, setfavourites] = useState([]);
  const [songs, setSong] = useState([1, 2, 3, 4]);
  useEffect(() => {
    shazam
      .get("/charts/track")
      .then((res) => {
        console.log(res.data);
        setSong(res.data.tracks);
        console.log(res.data.tracks[0]);
      })
      .catch((err) => {
        console.log(err.message);
        toast("Ooops...Failed to get Suggestions...");
      });

    if (auth) {
      axios
        .get("http://localhost:5000/favourites/getFav", {
          headers: {
            Authorization: JSON.parse(localStorage.getItem("data")).token,
          },
        })
        .then((res) => {
          console.log(res.data);
          setfavourites(res.data.favourites);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }, [])



  return (
    <Router>
      <div className="side-nav-container">
        <SideNavbar auth={auth} setAuth={setAuth} />
      </div>
      <div className="router-container">
        <Header auth={auth} setAuth={setAuth} />
        <div className="page-container">
          <Routes>
            <Route
              exact
              path="/"
              element={<Homepage songs={songs} auth={auth} setAuth={setAuth} />}
            />
            <Route
              exact
              path="/login"
              element={<Login auth={auth} setAuth={setAuth} />}
            />
            <Route
              exact
              path="/signup"
              element={<SignUp auth={auth} setAuth={setAuth} />}
            />
            <Route
              exact
              path="/findfriend"
              element={<FindFriend auth={auth} setAuth={setAuth} />}
            />
            <Route
              exact
              path="/chat"
              element={<Chat auth={auth} setAuth={setAuth} />}
            />
            <Route
              exact
              path="/playlist"
              element={<Playlist auth={auth} setAuth={setAuth} />}
            />
            <Route
              exact
              path="/favourites"
              element={
                <Favourites
                  favourites={favourites}
                  auth={auth}
                  setAuth={setAuth}
                />
              }
            />
          </Routes>
        </div>
      </div>
      <ToastContainer />
    </Router>
  );
}

export default App;
