import React, { useState } from "react";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import { Navigation, Pagination } from "swiper";
import AV1 from "./../../assets/Avatars/1.jpg";
import AV2 from "./../../assets/Avatars/2.jpeg";
import AV3 from "./../../assets/Avatars/3.jpg";
import AV4 from "./../../assets/Avatars/4.jpg";
import AV5 from "./../../assets/Avatars/5.jpg";
import AV6 from "./../../assets/Avatars/6.jpg";
import AV7 from "./../../assets/Avatars/6.jpg";
import AV8 from "./../../assets/Avatars/6.jpg";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./SignUpModal.css";
import { InfinitySpin } from "react-loader-spinner";

export default function SlideNextButton({handleClick}) {
  const swiper = useSwiper();
  const signup = () =>{
    swiper.slideNext()
    handleClick();
  }

  return (
    <div className="next-button" onClick={signup}>
      Next
    </div>
  );
}

export const SignUpModal = ({ user, setUser, setDisplay, handleClick }) => {
  const avatars = [AV1, AV2, AV3, AV4, AV5, AV6, AV7, AV8];
  const [selected, setSelected] = useState(0);
  const chooseAvatar = (avatar) => {
    setUser({ ...user, avatar });
    setSelected(avatar);
    console.log(user);
  };

  return (
    <div>
      <Swiper
        modules={[Navigation, Pagination]}
        spaceBetween={50}
        slidesPerView={1}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
      >
        <SwiperSlide>
          <div className="heading">Choose an Avatar</div>
          <div className="avatar-container">
            {avatars.map((avatar, i) => {
              return (
                <div
                  className="avatar"
                  onClick={() => {
                    chooseAvatar(i);
                  }}
                >
                  <img
                    className={selected === i ? "avatar-img" : ""}
                    with="200"
                    height="200"
                    src={avatar}
                    alt="hello"
                  />
                </div>
              );
            })}
          </div>
          <div>
            <div
              className="close-btn"
              onClick={() => {
                setDisplay({});
              }}
            >
              Close
            </div>
          </div>
          <div>
            <SlideNextButton handleClick={handleClick}/>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="waiting-container">
            <div>Please wait while we sign you up....</div>
            <InfinitySpin />
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};
