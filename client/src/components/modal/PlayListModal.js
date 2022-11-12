import React from "react";
import PlaylistSongSlider from "../../components/multiSlider/PlayListSongSlider";
import axios from "axios";

export const PlayListModal = ({ setDisplay, playlist }) => {
  const [arr, setArr] = React.useState([]);
  React.useEffect(() => {
    axios
      .get(`http://localhost:5000/playlists/getPlaylistSongs/${playlist.playlist_id}`)
      .then((response) => {
        console.log(response.data);
        setArr(response.data.songs)
      })
      .catch((error) => {});
  }, []);
  return (
    <div>
      <PlaylistSongSlider arr={arr} />
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
