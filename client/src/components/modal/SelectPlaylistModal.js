import React from "react";
import "./SelectPlaylistModal.css";
import { toast } from "react-toastify";
import axios from "axios";

export const SelectPlaylistModal = ({
  myPlayList,
  setDisplay,
  songid,
  song,
}) => {
  const addSong = (playList) => {
    axios
      .post(
        `http://localhost:5000/playlists/addSong/${playList}/${songid}`,
        { body: song },
        {
          headers: {
            Authorization: JSON.parse(localStorage.getItem("data")).token,
          },
        }
      )
      .then((res) => {
        toast(res.data.message);
      })
      .catch((err) => {
        console.log("Failed to add song");
      });
  };

  return (
    <div className="select-playlist-modal">
      <div className="select-playlist-heading">Select a Playlist</div>
      <div className="select-playlist-playlist-container">
        {myPlayList.map((playlist) => {
          return (
            <div
              className="select-playlist-playlist"
              onClick={() => addSong(playlist.playlist_id)}
            >
              {playlist.playlist_name}
            </div>
          );
        })}
      </div>
      <div
        className="close-btn"
        style={{ color: "white" }}
        onClick={() => {
          setDisplay(null);
        }}
      >
        Close
      </div>
    </div>
  );
};
