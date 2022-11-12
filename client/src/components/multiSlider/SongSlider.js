import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, {
  Navigation,
  Pagination,
  Autoplay,
  Virtual,
} from "swiper/core";
import "swiper/swiper-bundle.css";
import "./styles.css";
import {SelectPlaylistModal} from "../modal/SelectPlaylistModal"
import { SongCardS } from "../songCard/SongCardS";

SwiperCore.use([Navigation, Pagination, Autoplay, Virtual]);

export default function MultiSlider({
  arr,
  favourites,
  setfavourites,
  setMyPlayList,
  myPlayList,
}) {
  const [display, setDisplay] = React.useState(null);
  const [temp,setTemp] = React.useState({});
  

  return (
    <>
    <div className="slider-container">
      <Swiper
        id="swiper"
        virtual
        slidesPerView={4}
        spaceBetween={10}
        navigation
      >
        {arr.map((ele, i) => {
          return (
            <SwiperSlide
              key={`slide-${i}`}
              style={{ listStyle: "none" }}
            >
              <SongCardS
                eleid={ele.key}
                ele={ele}
                img={ele.images ? ele.images.coverart : ""}
                favourites={favourites}
                setfavourites={setfavourites}
                setDisplay={setDisplay}
                setTemp={setTemp}
              />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
    <div className="modal-container" style={display}>
        {display !== null ? (
          <div>
            <SelectPlaylistModal
              setDisplay={setDisplay}
              myPlayList={myPlayList}
              setMyPlayList={setMyPlayList}
              songid={temp.eleid}
              song={temp.ele}
            />
          </div>
        ) : (
          ""
        )}
      </div>
    </>
  );
}
