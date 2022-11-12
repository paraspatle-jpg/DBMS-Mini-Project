import axios from "axios";
import React, { useState } from "react";
import { toast } from "react-toastify";

export const CreatePlayList = ({ setMyPlayList }) => {
  const [body, setBody] = useState({ playlist_name: "", visibility: "1" });
  const handleClick = () => {
    console.log(body);
    if (body.playlist_name.length < 3) {
      toast("Please Choose a Long Name!");
      return;
    }
    axios
      .post("http://localhost:5000/playlists/createPlaylist", body, {
        headers: {
          Authorization: JSON.parse(localStorage.getItem("data")).token,
        },
      })
      .then((res) => {
        setMyPlayList(res.data.playlists);
        console.log(res.data);
        toast.success("Playlist created successfully!!")
      });
  };
  const handleChange = (e) => {
    console.log(body);
    setBody({ ...body, [e.target.name]: e.target.value });
  };
  return (
    <>
      <div className="create-playlist">
        <h1>Create Playlist</h1>
        <div className="create-bar">
          <input
            type="text"
            name="playlist_name"
            placeholder="Enter your playlist name here"
            onChange={handleChange}
          />
        </div>

        <div className="question-block">
          <div className="className">
            <legend>Do you want your playlist to be Private or Public ?</legend>
            <ul className="answers-list">
              <li
                style={{
                  backgroundColor: body.visibility === "1" ? "#f86b6b" : "",
                  borderRadius: "30px 30px 0 0",
                }}
                onClick={() => setBody({ ...body, visibility: "1" })}
              >
                Public
              </li>
              <li
                style={{
                  backgroundColor: body.visibility === "0" ? "#f86b6b" : "",
                  borderRadius: "0 0 30px 30px",
                }}
                onClick={() => setBody({ ...body, visibility: "0" })}
              >
                Private
              </li>
            </ul>
          </div>
        </div>

        <div onClick={handleClick} className="create-button-container">
          <div className="create-button">Create</div>
        </div>
      </div>
    </>
  );
};
