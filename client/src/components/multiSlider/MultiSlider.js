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
import bg from "./../../assets/BG.png"
// import {Favourites} from "./../../assets/Favourites"

SwiperCore.use([Navigation, Pagination, Autoplay, Virtual]);

export default function MultiSlider({ arr, content }) {
  return (
    <div className="slider-container">
      <Swiper
        id="swiper"
        virtual
        slidesPerView={3}
        spaceBetween={10}
        onReachEnd={() => {
          console.log("reach end");
          const tmp = arr.unshift();
          arr.push(tmp);
        }}
        navigation
      >
        {arr.map((ele, i) => {
          return (
            <SwiperSlide key={`slide-${i}`} style={{ listStyle: "none" }}>
                <div className="song-card-container">
                    <img className="song-img" src={bg} alt="hhe"/>
                    <div className="song-details">
                        <div className="song-title">Venom</div>
                        <div className="song-title">Favourites</div>
                    </div>
                </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
}
