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
import { SongCard } from "../songCard/SongCard";

SwiperCore.use([Navigation, Pagination, Autoplay, Virtual]);

export default function MultiSlider({ arr, favourites, setfavourites }) {
  return (
    <div className="slider-container">
      <Swiper
        id="swiper"
        virtual
        autoplay={true}
        slidesPerView={4}
        spaceBetween={10}
        navigation
      >
        {arr.map((ele, i) => {
          return (
            <SwiperSlide
              data-swiper-autoplay="2000"
              key={`slide-${i}`}
              style={{ listStyle: "none" }}
            >
              <SongCard
                eleid={ele.track.key}
                ele={ele.track}
                img={ele.track.images ? ele.track.images.coverart : ""}
                favourites={favourites}
                setfavourites={setfavourites}
              />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
}
