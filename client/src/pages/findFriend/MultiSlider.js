import React from "react";
import {useState} from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, {
  Navigation,
  Pagination,
  Autoplay,
  Virtual
} from "swiper/core";
import "swiper/swiper-bundle.css";
import "./FindFriend.css";

SwiperCore.use([Navigation, Pagination, Autoplay, Virtual]);

export default function MultiSlider() {
  const [buttonText, setButtonText] = useState('Follow');
  const slides = [];
  const artists = [
    "https://media.istockphoto.com/photos/young-female-rockstar-singing-in-concert-picture-id1268215945?b=1&k=20&m=1268215945&s=170667a&w=0&h=yWiwtFTs2VbGD7X72HcDVllCQMBXjSQ-65ubA9z6aww=",
    "https://images.unsplash.com/photo-1442328166075-47fe7153c128?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8ODN8fHBlb3BsZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
    "https://images.unsplash.com/photo-1529139574466-a303027c1d8b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTA5fHxwZW9wbGV8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
    "https://images.unsplash.com/photo-1460723237483-7a6dc9d0b212?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8c2luZ2VyfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
    "https://images.unsplash.com/photo-1512646605205-78422b7c7896?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8NzJ8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
    "https://images.unsplash.com/photo-1518577915332-c2a19f149a75?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MTU5fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60",
    "https://images.unsplash.com/photo-1497485692312-a26e1cc30f1d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8NDI4fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60",
  ];
  const names = ["Taylor Swift", "Alec Benjamin", "Avril Lavigne", "Enrique Iglesias", "Halsey","Brooke","Mike"]
  for (let i = 0; i < 4; i++) {
    slides.push(
      <SwiperSlide key={`slide-${i}`} style={{ listStyle: "none" }}>
      
        <div className="slide" >
          <img src={artists[i]} />
          <div className="artist-name">
            {names[i]}
          </div>

        </div>

      </SwiperSlide>
    );
  }
  function Follow() {
    if(buttonText=='Follow'){
    setButtonText('Unfollow');}
    else{
      setButtonText('Follow');
    }
  }

  return (
    <div>
      <Swiper
        id="swiper"
        virtual
        slidesPerView={3}
        spaceBetween={10}
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
      <div>

      <button className="follow-btn" onClick={Follow}>{buttonText}</button>
      </div>
      </div>
    
  );
}
