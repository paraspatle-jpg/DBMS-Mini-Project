import React, { useState, useEffect } from "react";
import { io } from "socket.io-client";
import { useColorMode } from "../../hooks/useColorMode.js";
import axios from "axios";
import "./Chat.css";
import { InfinitySpin } from "react-loader-spinner";
import { toast } from "react-toastify";
import AV1 from "./../../assets/Avatars/1.jpg";
import AV2 from "./../../assets/Avatars/2.jpeg";
import AV3 from "./../../assets/Avatars/3.jpg";
import AV4 from "./../../assets/Avatars/4.jpg";
import AV5 from "./../../assets/Avatars/5.jpg";
import AV6 from "./../../assets/Avatars/6.jpg";
import AV7 from "./../../assets/Avatars/6.jpg";
import AV8 from "./../../assets/Avatars/6.jpg";

export const Chat = ({ chats, groups, selected, setSelected, setGroups }) => {
  const user = JSON.parse(localStorage.getItem("data"));
  const avatars = [AV1, AV2, AV3, AV4, AV5, AV6, AV7, AV8];
  const [display, setDisplay] = useState(null);
  const [messages, setMessages] = useState([]); // messages of selected room
  const [type, setType] = useState("private");
  const styles = {
    position: "fixed",
    zIndex: "10000",
    height: "88vh",
    width: "88vw",
    top: "60px",
    right: "60px",
    backgroundColor: "#f86969",
    boxShadow: "1px 0px 30px black",
  };
  const socket = io("http://localhost:5000");

  const [message, setMessage] = useState(null); // message to be sent
  const handleChange = (e) => {
    setMessage(e.target.value);
  };

  const handleSend = (e) => {
    console.log(user);
    var room = {
      room: "",
      message: "",
      roomOrNot: "",
      user_id: user.user.user_id,
    };
    if (type === "private") {
      room.room = chats[selected].chat_id;
      room.message = message;
      room.roomOrNot = false;
    } else {
      room.room = groups[selected].room_id;
      room.message = message;
      room.roomOrNot = true;
    }
    socket.emit("new message", room);
    console.log("new message");
    document.getElementById("chat-msg-inp").value = "";
  };

  useEffect(() => {
    document.getElementById("navbar-container").style.boxShadow =
      "0px 0px 0px black";
    document.getElementById("chat-window-partition").style.width = "600px";
  }, []);

  useEffect(() => {
    socket.emit("connection");
    socket.on("response", (message) => {
      console.log(message);
    });
    if (chats !== undefined) {
      chats.map((chat) => {
        console.log(chat);
        socket.emit("subscribe", { room: chat.chat_id });
        return;
      });
      groups.map((chat) => {
        socket.emit("subscribe", { room: chat.room_id });
        return;
      });
    }

    socket.on("new message", (message) => {
      toast.success("Message Sent!!");
      setMessages((prevState) => [message.message, ...prevState]);
    });
  }, [chats]);

  const [loadingMessage, setLoadingMessage] = useState(true);

  useEffect(() => {
    if (chats !== undefined && chats.length > 0) {
      var room_id;
      if (type === "private") {
        room_id = chats[selected].chat_id;
      } else if( groups.length > 0) {
        room_id = groups[selected].room_id;
      }
      setLoadingMessage(true);
      axios
        .get(`http://localhost:5000/chat/${room_id}`)
        .then((response) => {
          setMessages(response.data.conversation);
          setLoadingMessage(false);
        })
        .catch((error) => {
          console.log(error);
        });
    }
  }, [type, selected, chats, groups]);

  const handleToggle = (t) => {
    setType(t);
    setSelected(0);
  };

  const [members, setMembers] = useState([]);
  const selectMembers = (e, member) => {
    console.log(members);
    if (members.includes(member)) {
      const index = members.indexOf(5);
      members.splice(index, 1);
      e.currentTarget.style.opacity = 1;
    } else {
      e.currentTarget.style.opacity = 0.5;
      setMembers([...members, member]);
    }
  };
  const [grpname, setGrpname] = useState("");
  const handleGrpName = (e) => {
    setGrpname(e.target.value);
    console.log(grpname);
  };

  const handleCreateGroup = () => {
    setDisplay(null);
    const body = {
      user_ids: members,
      room_name: grpname,
    };
    axios
      .post("http://localhost:5000/chat/initiateRoom", body, {
        headers: {
          Authorization: JSON.parse(localStorage.getItem("data")).token,
        },
      })
      .then((response) => {
        console.log(response.data);
        setGroups([response.data.chatRoom[0], ...groups]);
        toast.success("Group Create successfully!!")
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="chat-container">
      <div
        className="chat-dms-container"
        style={{
          backgroundColor: useColorMode("#EEEADE", "rgba(32, 33, 36, 1)"),
        }}
      >
        <div className="chat-search-bar">
          <input
            className="chat-search"
            placeholder="Type here to search...🔍"
          ></input>
        </div>
        <div className="chat-toggle">
          <div
            className={`chat-toggle-btns ${type === "private" ? "active" : ""}`}
            onClick={() => handleToggle("private")}
          >
            Chats
          </div>
          <div
            className={`chat-toggle-btns ${type === "public" ? "active" : ""}`}
            onClick={() => handleToggle("public")}
          >
            Groups
          </div>
        </div>
        <div className="chat-dm-list">
          {chats === undefined ? (
            <InfinitySpin color="#f86969" width="500px"/>
          ) : type === "private" ? (
            chats.map((ele, i) => {
              return (
                <div
                  className={`chat-dm ${
                    i === selected ? "chat-dm-active" : ""
                  }`}
                  onClick={() => setSelected(i)}
                >
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "flex-start",
                      alignItems: "center",
                    }}
                  >
                    <img
                      width="50"
                      height="50"
                      src={avatars[ele.avatar]}
                      alt=""
                      style={{ borderRadius: "50%", marginRight: "20px" }}
                    />
                    <span>{ele.name}</span>
                  </div>
                </div>
              );
            })
          ) : (
            groups.map((ele, i) => {
              return (
                <div
                  className={`chat-dm ${
                    i === selected ? "chat-dm-active" : ""
                  }`}
                  onClick={() => setSelected(i)}
                >
                  {ele.room_name}
                </div>
              );
            })
          )}
        </div>
        <div
          className="create-grp"
          onClick={() => {
            setDisplay(styles);
          }}
        >
          +
        </div>
        {/* ///////////////////////////////////////////// */}
        {display !== null ? (
          <div style={display}>
            <div>
              <div className="heading">Select members of grps</div>
              <div className="chats-container">
                {chats !== undefined ? (
                  chats.map((user) => {
                    return (
                      <div
                        className="chat-users"
                        onClick={(e) => selectMembers(e, user.user_id)}
                      >
                        {user.name}
                      </div>
                    );
                  })
                ) : (
                  <div>Loading...</div>
                )}
              </div>
            </div>
            <div>
              <div className="heading">Choose a name for group</div>
              <div className="create-grp-input">
                <input
                  placeholder="Enter group name.."
                  onChange={handleGrpName}
                ></input>
              </div>
            </div>
            <div
              className="close-btn"
              style={{ color: "white" }}
              onClick={() => {
                setDisplay(null);
              }}
            >
              Close
            </div>
            <div
              className="next-button"
              style={{ color: "white" }}
              onClick={handleCreateGroup}
            >
              Create
            </div>
          </div>
        ) : (
          ""
        )}
        {/* ///////////////////////////////////////////////////////// */}
      </div>
      <div
        className="chat-window-container"
        style={{
          backgroundColor: useColorMode("#d6d6d6", "rgba(32, 33, 36, 1)"),
        }}
      >
        <div className="chat-Profile">
          <div className="chat-avatar"></div>
          <div className="chat-name">
            {chats === undefined || chats.length === 0? (
              ""
            ) : type === "private" ? (
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <img
                  width="50"
                  height="50"
                  src={avatars[chats[selected].avatar]}
                  alt=""
                  style={{ borderRadius: "50%", marginRight: "20px" }}
                />
                <span>{chats[selected].name}</span>
              </div>
            ) : (
              groups[selected].room_name
            )}
          </div>
          <hr id="chat-window-partition"></hr>
        </div>
        <div className="chat-messages-container">
          {loadingMessage ? (
            <InfinitySpin color="#f86969" width="500px"/>
          ) : (
            messages.map((message) => {
              return (
                <div className="chat-message-container">
                  <div>
                    <img
                      width="35"
                      height="35"
                      src={avatars[message.avatar]}
                      style={{ borderRadius: "50%" }}
                      alt="avatar"
                    />
                    <div style={{ marginLeft: "5px" }}>{message.name}</div>
                  </div>
                  <div className="chat-message">{message.message}</div>
                </div>
              );
            })
          )}
        </div>
        <div className="chat-message-input">
          <input
            id="chat-msg-inp"
            className="chat-input-message"
            placeholder="Type your messages here..."
            type="text"
            onChange={handleChange}
          ></input>
          <div className="send-btn" onClick={handleSend}>
            Send
          </div>
        </div>
      </div>
    </div>
  );
};
