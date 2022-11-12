import React from "react";
import {InfinitySpin} from "react-loader-spinner"
import { CreatePlayList } from "../../components/createPlaylist/CreatePlayList";
import { PlayListContainer } from "./../../components/playListContainer/PlayListContainer";
import "./Playlist.css";

export const Playlist = ({ myPlayList, playListSuggestions,setMyPlayList}) => {
  return (
    <div className="playlist-container">
      <div className="my-playlist">
        <h1 className="h1-my-playlist">My Playlist</h1>
        <div className="navbar-playlist">
          {myPlayList[0] === 1 ? (
            <InfinitySpin width="200" color="#f86969" />
          ) : (
            <PlayListContainer myPlayList={myPlayList} />
          )}
        </div>
        <h1 className="h1-my-playlist">Other's Playlist</h1>
        <div className="navbar-playlist">
        {myPlayList[0] === 1 ? (
            <InfinitySpin width="200" color="#f86969" />
          ) : (
            <PlayListContainer myPlayList={playListSuggestions} />
          )}
        </div>
      </div>
      <CreatePlayList setMyPlayList={setMyPlayList} />
    </div>
  );
};
