import React, { useState } from "react";
import { PlayListModal } from "../../components/modal/PlayListModal";
import "./PlayListContainer.css";

export const PlayListContainer = ({ myPlayList }) => {
  const [display, setDisplay] = useState(null);
  const [id, setId] = useState(null);
  const styles = {
    position: "fixed",
    zIndex: "10000",
    height: "83vh",
    width: "90vw",
    top: "100px",
    right: "30px",
    backgroundColor: "#f86969",
  };
  return (
    <div>
      {myPlayList.map((playlist) => {
        return (
          <>
            <div
              className="nav-link-playlist"
              onClick={() => {
                setDisplay(styles);
                setId(playlist.playlist_id);
              }}
            >
              {playlist.playlist_name}
            </div>
            {display !== null && id === playlist.playlist_id ? (
              <div style={display}>
                <PlayListModal setDisplay={setDisplay} playlist={playlist} />
              </div>
            ) : (
              ""
            )}
          </>
        );
      })}
    </div>
  );
};
