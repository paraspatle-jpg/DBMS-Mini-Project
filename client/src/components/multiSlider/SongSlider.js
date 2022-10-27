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
import Favourites from "../../assets/Favourites.js";
import { toast } from "react-toastify";
import axios from "axios";

SwiperCore.use([Navigation, Pagination, Autoplay, Virtual]);

export default function MultiSlider({ arr, content }) {
  const handleClick = (song_id, e) => {
    // e.currentTarget.style.fill = "black";
    console.log("Paras");
    if (localStorage.getItem("data")) {
      axios
        .post(`http://localhost:5000/favourites/addtoFav/${song_id}`,{}, {
          headers: {
            "Authorization": JSON.parse(localStorage.getItem("data")).token,
          },
        })
        .then((res) => {
          console.log(res);
        });
    } else {
      console.log("Paras");
      toast("Please Login or SignUp First");
    }
  };

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
                  src={ele.images ? ele.images.coverart : ""}
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
                    <Favourites onClick={() => handleClick(ele.key)} />
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
