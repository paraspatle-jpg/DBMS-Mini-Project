import React from "react";
import Favourites from "../../assets/Favourites.js";
import RemoveFavourites from "./../../assets/RemoveFavourites";
import { AddToPlayList } from "./../../assets/AddToPlayList";
import axios from "axios";
import { toast } from "react-toastify";
import "./SongCard.css";

export const SongCardS = ({
  ele,
  img,
  setfavourites,
  favourites,
  eleid,
  setDisplay,
  setTemp
}) => {
  const handleClick = (song) => {
    if (localStorage.getItem("data")) {
      axios
        .post(
          `http://localhost:5000/favourites/addtoFav/${song.key}`,
          { body: song },
          {
            headers: {
              Authorization: JSON.parse(localStorage.getItem("data")).token,
            },
          }
        )
        .then((res) => {
          console.log(res.data);
          setfavourites(res.data.favourites);
          toast.success("Added to favorites!!");
        });
    } else {
      toast("Please Login or SignUp First");
    }
  };
  const styles = {
    position: "fixed",
    zIndex: "10000",
    height: "83vh",
    width: "83vw",
    top: "100px",
    right: "100px",
    backgroundColor: "#f86969",
    boxShadow: "1px 0px 30px black",
    opacity: 1,
  };

  const addToPlayList = (eleid,ele) => {
    setDisplay(styles);
    setTemp({ele,eleid});
  };

  return (
    <div>
      <div
        className="song-card-container"
        data-aos="fade-up"
        data-aos-offset="100"
        data-aos-delay="300"
        data-aos-duration="2000"
        data-aos-easing="ease-in-out"
      >
        <img className="song-img" lazyload="true" src={img} alt="hhe" />
        <div className="song-details ">
          <div className="song-details-cont">
            <div className="song-title">{ele.title}</div>
            <div className="song-subtitle">{ele.subtitle}</div>
          </div>
          <div className="song-actions">
            <div
              className="song-favourites"
              style={{ height: "40px" }}
              onClick={() => addToPlayList(eleid,ele)}
            >
              <AddToPlayList />
            </div>
            <div className="song-favourites" style={{ height: "40px" }}>
              {favourites.some((e) => e.song_id === parseInt(eleid)) ? (
                <RemoveFavourites onClick={(eleid) => console.log(eleid)} />
              ) : (
                <Favourites onClick={() => handleClick(ele)} />
              )}
            </div>
          </div>
        </div>
      </div>
      
    </div>
  );
};
