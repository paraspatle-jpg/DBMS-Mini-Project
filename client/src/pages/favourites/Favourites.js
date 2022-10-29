import React, { useState, useEffect } from "react";
import shazam from "../../apis/shazamApi";
import "./Favourites.css";

export const Favourites = ({ favourites}) => {

  return (
    <div className="favourites-container">
      <div className="favourites-heading">Favourites</div>
      <div>
        {favourites.map((ele) => {
          return (
            <div
              className="song-card-container"
              data-aos="fade-up"
              data-aos-offset="100"
              data-aos-delay="300"
              data-aos-duration="2000"
              data-aos-easing="ease-in-out"
            >
              <img
                className="song-img"
                lazyload="true"
                src={ele.image_url ? ele.image_url : ""}
                alt="hhe"
              />
              <div className="song-details">
                <div className="song-details-cont">
                  <div className="song-title">{ele.title}</div>
                  <div className="song-subtitle">{ele.subtitle}</div>
                </div>
                <div
                  className="song-favourites"
                  style={{ height: "40px", marginTop: "-10px" }}
                >
                  {/* <Favourites onClick={() => handleClick(ele.key)} /> */}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
