import React, { useEffect } from "react";
import "./HomePage.css";
import MultiSlider from "../../components/multiSlider/MultiSlider";

export const Homepage = () => {
  const songs = [1, 2, 3, 4, 5, 6, 7,8,9];
  useEffect(() => {

  }, []);


  return (
    <div>
      <div className="hero-bg">
        <div className="hero-content">
          <div className="hero-heading">Show Your Fandom</div>
          <div className="hero-begin">Begin</div>
        </div>
      </div>
      <div className="">
        <MultiSlider arr={songs} />
      </div>
    </div>
  );
};
