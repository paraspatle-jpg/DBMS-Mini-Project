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

SwiperCore.use([Navigation, Pagination, Autoplay, Virtual]);

export default function ArtistMultiSlider({ arr, content }) {

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
        {arr.map(({artist}, i) => {
          return (
            <SwiperSlide data-swiper-autoplay="2000" key={`slide-${i}`} style={{ listStyle: "none" }}>
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
                  src={artist.avatar ? artist.avatar : ""}
                  alt="hhe"
                />
                <div className="song-details">
                  <div className="song-details-cont">
                    <div className="song-title">{artist.name}</div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
}
