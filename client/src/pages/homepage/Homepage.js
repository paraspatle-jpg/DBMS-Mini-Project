import React, { useEffect, useState } from "react";
import "./HomePage.css";
import MultiSlider from "../../components/multiSlider/SongSlider";
import { SearchSongs } from "./../../components/searchSongs/SearchSongs.js";
import shazam from "../../apis/shazamApi";
import {toast} from "react-toastify"
import { InfinitySpin } from "react-loader-spinner";

export const Homepage = ({ songs,setSongs, favourites, setfavourites,myPlayList,setMyPlayList }) => {
  const headings = ["Show Your Fandom", "Explore The Beats"];
  const [i, seti] = useState(0);
  const [styles, setStyles] = useState({ opacity: 1 });

    useEffect(() => {
    shazam
      .get("/charts/track")
      .then((res) => {
        console.log(res.data);
        setSongs(res.data.tracks);
        console.log(res.data.tracks[0]);
      })
      .catch((err) => {
        console.log(err.message);
        toast("Ooops...Failed to get Suggestions...");
      });
  }, []);

  useEffect(() => {
    setTimeout(() => {
      setStyles({ opacity: 0 });
      setTimeout(() => {
        seti((i + 1) % headings.length);
        setStyles({ opacity: 1 });
      }, 4100);
    }, 4000);
  }, [i]);

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
      <div className="search-songs">
        <div className="search-songs-heading">Search Here...🔍</div>
        <SearchSongs favourites={favourites} setfavourites={setfavourites} />
      </div>
      <div className="suggested-songs">
        <div className="suggested-songs-heading">Suggested Songs</div>
        {
          songs[0] !== 1?<MultiSlider
          arr={songs}
          favourites={favourites}
          setfavourites={setfavourites}
          myPlayList={myPlayList}
          setMyPlayList={setMyPlayList}
        />:<InfinitySpin width="200"/>
        }
        
      </div>
    </div>
  );
};
