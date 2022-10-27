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
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import axios from "axios";

function App() {
  const [auth, setAuth] = useState(localStorage.getItem("data"));
  const [favourites, setfavourites] = useState([]);
  useEffect(() => {
    if (auth) {
      axios
        .get("http://localhost:5000/favourites/getFav", {
          headers: {
            Authorization: JSON.parse(localStorage.getItem("data")).token,
          },
        })
        .then((res) => {
          console.log(res.data);
          setfavourites(res.data)
        }).catch((err) => {
          
        })
    }
  }, []);

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
              element={<Homepage auth={auth} setAuth={setAuth} />}
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
              path="/favourites"
              element={<Favourites favourites={favourites} auth={auth} setAuth={setAuth} />}
            />
          </Routes>
        </div>
      </div>
      <ToastContainer />
    </Router>
  );
}

export default App;
