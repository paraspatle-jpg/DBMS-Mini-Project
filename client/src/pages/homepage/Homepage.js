import React, { useEffect, useState } from "react";
import "./HomePage.css";
import MultiSlider from "../../components/multiSlider/SongSlider";
import { SearchSongs } from "./../../components/searchSongs/SearchSongs.js";

export const Homepage = ({songs}) => {
  const headings = ["Show Your Fandom", "Explore The Beats"];
  const [i, seti] = useState(0);
  const [styles, setStyles] = useState({ opacity: 1 });

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
        <SearchSongs />
      </div>
      <div className="suggested-songs">
        <div className="suggested-songs-heading">Suggested Songs</div>
        <MultiSlider arr={songs} />
      </div>
    </div>
  );
};
