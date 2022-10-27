import React, { useState } from "react";
import MultiSlider from "../multiSlider/SearchSongSlider";
import ArtistMultiSlider from "../multiSlider/SearchArtistSlider";
import axios from "axios";
import "./SearchSongs.css";

export const SearchSongs = () => {
  const [state, setState] = useState("no results");
  const [tracks, setTracks] = useState([]);
  const [artist, setArtist] = useState([]);

  const handleChange = (e) => {
    var value = e.target.value;
    const options = {
      method: "GET",
      url: "https://shazam.p.rapidapi.com/search",
      params: { term: value, locale: "en-US", offset: "0", limit: "20" },
      headers: {
        "X-RapidAPI-Key": "ea7e195979mshfde7ccf83fd79f7p1aee26jsn0a766891bdc0",
        "X-RapidAPI-Host": "shazam.p.rapidapi.com",
      },
    };

    axios
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
            <MultiSlider arr={tracks} />
            <div className="search-result-heading">Artists</div>
            <ArtistMultiSlider arr={artist}/>
          </div>
        )}
      </div>
    </div>
  );
};
