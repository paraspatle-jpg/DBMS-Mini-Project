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
import AV1 from "./../../assets/Avatars/1.jpg";
import AV2 from "./../../assets/Avatars/2.jpeg";
import AV3 from "./../../assets/Avatars/3.jpg";
import AV4 from "./../../assets/Avatars/4.jpg";
import AV5 from "./../../assets/Avatars/5.jpg";
import AV6 from "./../../assets/Avatars/6.jpg";
import AV7 from "./../../assets/Avatars/6.jpg";
import AV8 from "./../../assets/Avatars/6.jpg";

SwiperCore.use([Navigation, Pagination, Autoplay, Virtual]);

export default function MultiSlider({addFriend}) {
  const avatars = [AV1, AV2, AV3, AV4, AV5, AV6, AV7, AV8];
  const [suggestions, setSuggestions] = useState([1, 2, 3, 4]);

  useEffect(() => {
    strings
      .get("/friends/getFriendSuggestions",{
        headers: {
          Authorization: JSON.parse(localStorage.getItem("data")).token,
        },
      })
      .then((res) => {
        console.log(res.data);
        setSuggestions(res.data.friends)
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
        slidesPerView={4}
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
              <div className="card-content">
                <div className="image">
                  <img alt="" src={avatars[suggestion.avatar]} />
                </div>
                <div className="name-profession">
                  <span className="name">{suggestion.name}</span>
                </div>
                <div className="btn">
                  <button
                    className="unfollow-btn"
                    onClick={()=>addFriend(suggestion.user_id)}
                  >
                    Add Friend
                  </button>
                </div>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
}
