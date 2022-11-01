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
import { useColorMode } from "../../hooks/useColorMode";

SwiperCore.use([Navigation, Pagination, Autoplay, Virtual]);

export default function PlaylistSongSlider({
  arr,
}) {
  const ChangeColor = () => {
    return useColorMode("#f5f5f5","black" );
  };
  return (
    <div className="slider-container">
      <Swiper
        id="swiper"
        virtual
        autoplay={true}
        slidesPerView={3}
        spaceBetween={165}
        navigation
      >
        {arr.map((track, i) => {
          return (
            <SwiperSlide
              key={`slide-${i}`}
              style={{ listStyle: "none" }}
            >
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
                  src={track.image_url}
                  alt="hhe"
                />
                <div className="song-details" style={{background: ChangeColor()}}>
                  <div className="song-details-cont">
                    <div className="song-title">{track.title}</div>
                    <div className="song-subtitle">{track.subtitle}</div>
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
