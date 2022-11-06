import React, { useState, useEffect } from "react";
import { Header } from "./components/header/Header";
import { SideNavbar } from "./components/sidenav/SideNavbar";
import { Login } from "./pages/login/Login";
import { SignUp } from "./pages/signup/SignUp";
import { Homepage } from "./pages/homepage/Homepage";
import { FindFriend } from "./pages/findFriend/FindFriend";
import { Chat } from "./pages/chat/Chat";
import { Favourites } from "./pages/favourites/Favourites";
import { Playlist } from "./pages/playlist/Playlist";
import { ToastContainer} from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
import "./App.css";
import { PrivateRoute } from "./components/privateRoute/PrivateRoute";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  const [auth, setAuth] = useState(localStorage.getItem("data"));
  const [favourites, setfavourites] = useState([1]);
  const [myPlayList, setMyPlayList] = useState([1]);
  const [playListSuggestions, setPlayListSuggestions] = useState([1]);
  const [songs, setSongs] = useState([1, 2, 3, 4]);
  const [chats, setChats] = useState();
  const [groups, setGroups] = useState();
  const [selected, setSelected] = useState(0);


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
          setfavourites(res.data.favourites);
        })
        .catch((err) => {
          console.log(err);
        });

      //-----------------------------------------------------------------------------
      axios
        .get("http://localhost:5000/playlists/getMyPlaylists", {
          headers: {
            Authorization: JSON.parse(localStorage.getItem("data")).token,
          },
        })
        .then((res) => {
          console.log(res.data);
          setMyPlayList(res.data.playlists);
        })
        .catch((err) => {
          console.log(err);
        });
        //-==========================================================
      axios
        .get("http://localhost:5000/playlists/getPlaylistSuggestions", {
          headers: {
            Authorization: JSON.parse(localStorage.getItem("data")).token,
          },
        })
        .then((res) => {
          console.log(res.data);
          setPlayListSuggestions(res.data.playlists);
        })
        .catch((err) => {
          console.log(err);
        });
        // =================================================================
        axios
        .get("http://localhost:5000/chat", {
          headers: {
            Authorization: JSON.parse(localStorage.getItem("data")).token,
          },
        })
        .then((res) => {
          console.log(res.data);
          setChats(res.data.chats);
          setGroups(res.data.rooms);
        })
        .catch((err) => {
          console.log(err);
        });

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
              element={
                //-============================================
                <Homepage
                  favourites={favourites}
                  setfavourites={setfavourites}
                  songs={songs}
                  setSongs={setSongs}
                  auth={auth}
                  setAuth={setAuth}
                  myPlayList={myPlayList}
                  setMyPlayList={setMyPlayList}
                />
                //============================================
              }
            />
            <Route
              exact
              path="/login"
              element={
                //============================================
                <Login auth={auth} setAuth={setAuth} />
                //============================================
              }
            />
            <Route
              exact
              path="/signup"
              element={
                //============================================
                <SignUp auth={auth} setAuth={setAuth} />
                //============================================
              }
            />
            <Route
              exact
              path="/findfriend"
              element={<PrivateRoute auth={auth} />}
            >
              <Route
                exact
                path="/findfriend"
                element={
                  //============================================
                  <FindFriend auth={auth} setAuth={setAuth} chats={chats} setChats={setChats} setSelected={setSelected}/>
                  //============================================
                }
              />
            </Route>
            <Route exact path="/chat" element={<PrivateRoute auth={auth} />}>
              <Route
                exact
                path="/chat"
                element={
                  //============================================
                  <Chat setGroups={setGroups} auth={auth} setAuth={setAuth} chats={chats} groups={groups} selected={selected} setSelected={setSelected} />
                  //============================================
                }
              />
            </Route>
            <Route
              exact
              path="/playlist"
              element={<PrivateRoute auth={auth} />}
            >
              <Route
                exact
                path="/playlist"
                element={
                  //============================================
                  <Playlist
                    myPlayList={myPlayList}
                    setMyPlayList={setMyPlayList}
                    playListSuggestions={playListSuggestions}
                    setPlayListSuggestions={setPlayListSuggestions}
                    auth={auth}
                    setAuth={setAuth}
                  />
                  //============================================
                }
              />
            </Route>

            <Route
              exact
              path="/favourites"
              element={<PrivateRoute auth={auth} />}
            >
              <Route
                exact
                path="/favourites"
                element={
                  //============================================
                  <Favourites
                    favourites={favourites}
                    setfavourites={setfavourites}
                    auth={auth}
                    setAuth={setAuth}
                    myPlayList={myPlayList}
                  setMyPlayList={setMyPlayList}
                  />
                  //============================================
                }
              />
            </Route>
          </Routes>
        </div>
      </div>
      <ToastContainer />
    </Router>
  );
}

export default App;
