import React, { useEffect } from "react";
import { useState } from "react";
import MultiSlider from "./MultiSlider";
import axios from "axios";
import { InfinitySpin } from "react-loader-spinner";
import AV1 from "./../../assets/Avatars/1.jpg";
import AV2 from "./../../assets/Avatars/2.jpeg";
import AV3 from "./../../assets/Avatars/3.jpg";
import AV4 from "./../../assets/Avatars/4.jpg";
import AV5 from "./../../assets/Avatars/5.jpg";
import AV6 from "./../../assets/Avatars/6.jpg";
import AV7 from "./../../assets/Avatars/6.jpg";
import AV8 from "./../../assets/Avatars/6.jpg";
import { toast } from "react-toastify";
import {useNavigate} from "react-router-dom"

export const FindFriend = ({chats,setChats,setSeleted}) => {
  const avatars = [AV1, AV2, AV3, AV4, AV5, AV6, AV7, AV8];
  const [people, setPeople] = useState([]);
  const [searchLoading, setSearchLoading] = useState(false);
  const [searchResults, setSearchResults] = useState([]);

  const navigation = useNavigate();

  useEffect(() => {
    axios
      .get(`http://localhost:5000/friends/getFriends`, {
        headers: {
          Authorization: JSON.parse(localStorage.getItem("data")).token,
        },
      })
      .then((response) => {
        console.log(response.data);
        setPeople(response.data.friends);
      })
      .catch((error) => {});
  }, []);

  const handleChange = (e) => {
    setSearchLoading(true);
    if(e.target.value === "") {
      setSearchLoading(false);
      setSearchResults([]);
      return;
    }
    axios
      .get(`http://localhost:5000/friends/searchFriends/${e.target.value}`, {
        headers: {
          Authorization: JSON.parse(localStorage.getItem("data")).token,
        },
      })
      .then((response) => {
        console.log(response.data);
        setSearchLoading(false)
        setSearchResults(response.data.friends);
      })
      .catch((error) => {});
  };
  const addFriend = (friend_id) => {
    axios
      .post(`http://localhost:5000/friends/addFriend/${friend_id}`,{}, {
        headers: {
          Authorization: JSON.parse(localStorage.getItem("data")).token,
        },
      })
      .then((response) => {
        console.log(response.data);
        toast(response.data.message);
      })
      .catch((error) => {});
  };

  const handleMessage = (id) =>{
    const body = {
      user_id:id
    }
    console.log(body);
    axios.post(`http://localhost:5000/chat/initiate`,body,{
      headers: {
        Authorization: JSON.parse(localStorage.getItem("data")).token,
      }}).then((response) => {
        navigation("/chat")
        console.log(response.data);
      })
  }

  return (
    <div className="find-friend-container">
      <div className="search-section">
        <h1>Search for a Friend</h1>
        <input
          type="text"
          className="search-form-text"
          placeholder="Search"
          onChange={handleChange}
        />
        {searchLoading === true ? (
          <div className="pre-text">
            <InfinitySpin color="#f86b6b" />
          </div>
        ) : searchLoading === false && searchResults.length === 0 ? (
          <div className="pre-text">Please Enter Something...</div>
        ) : (
          searchResults.map((people, index) => {
            return (
              <div className="card-content">
                <div className="image">
                  <img alt="" src={avatars[people.avatar]} />
                </div>
                <div className="name-profession">
                  <span className="name">{people.name}</span>
                </div>
                <div className="btn">
                  <button
                    className="unfollow-btn"
                    onClick={()=>addFriend(people.user_id)}
                  >
                    Add Friend
                  </button>
                </div>
              </div>
            );
          })
        )}
      </div>
      <h1>Friend Suggestions</h1>
      <MultiSlider addFriend={addFriend} />
      <div>
          <h1>People You Follow</h1>
        <div id="people">
          {people.map((people, index) => {
            return (
              <div className="card-content">
                <div className="image">
                  <img alt="" src={avatars[people.avatar]} />
                </div>
                <div className="name-profession">
                  <span className="name">{people.name}</span>
                </div>
                <div className="btn">
                  <button className="unfollow-btn" onClick={()=>handleMessage(people.friend_id)}>Message</button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
