import React, { useEffect, useState } from "react";
import axios from "axios";
import "./HomePage.css";
import MultiSlider from "../../components/multiSlider/SongSlider";
import { toast } from 'react-toastify';

export const Homepage = () => {
  const [songs, setSong] = useState([1,2,3,4]);
  const headings = ["Show Your Fandom","Explore The Beats"]
  const [i,seti] = useState(0);
  const [styles,setStyles] = useState({opacity:1});
  useEffect(() => {
    axios
      .get("https://shazam.p.rapidapi.com/charts/track", {
        headers: {
          "X-RapidAPI-Key":
            "ea7e195979mshfde7ccf83fd79f7p1aee26jsn0a766891bdc0",
          "X-RapidAPI-Host": "shazam.p.rapidapi.com",
        },
      })
      .then((res) => {
        console.log(res.data);
        setSong(res.data.tracks);
        console.log(res.data.tracks[0]);
      })
      .catch((err) => {
        console.log(err.message);
        toast("Ooops...Failed to get Suggestions...")
      });
  }, []);

  

  useEffect(() => {
    setTimeout(() =>{
      setStyles({opacity: 0});
      setTimeout(() =>{ 
        seti((i+1)%headings.length)
      setStyles({opacity: 1});
      },4100)
    },4000)
  },[i])

  

  return (
    <div>
      <div className="hero-bg">
        <div className="hero-content">
          <div
            className="hero-heading"
            data-aos="tr-lr"
            data-aos-offset="0"
            data-aos-delay="0"
            data-aos-duration="2000"
            data-aos-easing="ease-in-out"
            style={styles}
          >
            {headings[i]}
          </div>
          <div
            className="hero-begin"
            data-aos="fade-up"
            data-aos-offset="0"
            data-aos-delay="0"
            data-aos-duration="2000"
            data-aos-easing="ease-in-out"
          >
            Begin
          </div>
        </div>
      </div>
      <div className="suggested-songs">
        <div className="suggested-songs-heading">Suggested Songs</div>
        <MultiSlider arr={songs} />
      </div>
    </div>
  );
};
