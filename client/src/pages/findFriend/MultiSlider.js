import React from "react";
import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, {
  Navigation,
  Pagination,
  Autoplay,
  Virtual,
} from "swiper/core";
import "swiper/swiper-bundle.css";
import "./FindFriend.css";
import { useEffect } from "react";
import strings from "../../apis/stringsApi";
import { toast } from "react-toastify";

SwiperCore.use([Navigation, Pagination, Autoplay, Virtual]);

export default function MultiSlider() {
  const [buttonText, setButtonText] = useState("Follow");
  const [suggestions, setSuggestions] = useState([1, 2, 3, 4]);

  function Follow() {
    if (buttonText === "Follow") {
      setButtonText("Unfollow");
    } else {
      setButtonText("Follow");
    }
  }

  useEffect(() => {
    strings
      .get("/friends/getFriendSuggestions")
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
        toast("Ooops...Failed to get Suggestions...");
      });
  }, []);

  return (
    <div>
      <Swiper
        id="swiper"
        virtual
        slidesPerView={3}
        spaceBetween={10}
        navigation
      >
        {suggestions.map((suggestion, i) => {
          return (
            <SwiperSlide
              data-swiper-autoplay="2000"
              key={`slide-${i}`}
              style={{ listStyle: "none" }}
            >
              <div>Paras</div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
}
