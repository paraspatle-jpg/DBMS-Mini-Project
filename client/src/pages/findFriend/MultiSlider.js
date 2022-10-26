import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, {
  Navigation,
  Pagination,
  Autoplay,
  Virtual
} from "swiper/core";
import "swiper/swiper-bundle.css";
import "./styles.css";

SwiperCore.use([Navigation, Pagination, Autoplay, Virtual]);

export default function MultiSlider() {
  const slides = [];

  for (let i = 0; i < 12; i++) {
    slides.push(
      <SwiperSlide key={`slide-${i}`} style={{ listStyle: "none" }}>
        <div className="slide">
          <h3>{i}</h3>
        </div>
      </SwiperSlide>
    );
  }

  return (
    <Swiper
      id="swiper"
      virtual
      slidesPerView={3}
      // slidesPerColumn={2}
      // slidesPerColumnFill="row"
      spaceBetween={30}
      // slidesPerGroup={2}
      // autoplay
      // loop
      onReachEnd={() => {
        console.log("reach end");
        const tmp = slides.unshift();
        slides.push(tmp);
      }}
      navigation
      pagination
    >
      {slides}
    </Swiper>
  );
}
