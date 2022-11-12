import React, { useEffect } from "react";
import "./Favourites.css";
import { SongCard } from "../../components/songCard/SongCard";
import axios from "axios";
import { InfinitySpin } from "react-loader-spinner";

export const Favourites = ({
  myPlayList,
  setMyPlayList,
  favourites,
  setfavourites,
}) => {
  useEffect(() => {
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
  }, []);

  return (
    <div className="favourites-container">
      <div className="favourites-heading">Favourites</div>
      <div className="favourite-songs-container">
        {favourites[0] !== 1 ? (
          favourites.map((ele) => {
            return (
              <div className="favourite-song-container">
                <SongCard
                  myPlayList={myPlayList}
                  setMyPlayList={setMyPlayList}
                  favourites={favourites}
                  setfavourites={setfavourites}
                  ele={ele}
                  img={ele.image_url}
                  eleid={ele.song_id}
                />
              </div>
            );
          })
        ) : (
          <InfinitySpin />
        )}
      </div>
    </div>
  );
};
