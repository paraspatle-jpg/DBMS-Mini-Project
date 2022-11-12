import React, { useState } from "react";
import MultiSlider from "../multiSlider/SearchSongSlider";
import ArtistMultiSlider from "../multiSlider/SearchArtistSlider";
import shazam from "../../apis/shazamApi";
import "./SearchSongs.css";

export const SearchSongs = ({favourites,setfavourites}) => {
  const [state, setState] = useState("no results");
  const [tracks, setTracks] = useState([]);
  const [artist, setArtist] = useState([]);

  const handleChange = (e) => {
    var value = e.target.value;
    const options = {
      method: "GET",
      url: "/search",
      params: { term: value, locale: "en-US", offset: "0", limit: "20" },
    };

    shazam
      .request(options)
      .then(function (response) {
        console.log(response.data);
        setState("hello");
        setTracks(response.data.tracks.hits);
        setArtist(response.data.artists.hits);
      })
      .catch(function (error) {
        console.error(error);
      });
  };
  return (
    <div className="search-songs-container">
      <div className="search-songs-input-container">
        <input
          placeholder="Search for songs or artists here..."
          onChange={handleChange}
        ></input>
      </div>
      <div className="results">
        {state === "no results" ? (
          <div className="no-results">
            Type above to see the search results<br></br> here..
          </div>
        ) : (
          <div>
            <div className="search-result-heading">Songs</div>
            <MultiSlider arr={tracks} favourites={favourites} setfavourites={setfavourites}  />
            <div className="search-result-heading">Artists</div>
            <ArtistMultiSlider arr={artist}/>
          </div>
        )}
      </div>
    </div>
  );
};
