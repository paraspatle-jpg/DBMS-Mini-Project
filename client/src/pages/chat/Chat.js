import React, { useState, useEffect } from "react";
import { useColorMode } from "../../hooks/useColorMode.js";
import "./Chat.css";

export const Chat = ({auth,seAuth}) => {
  const [chats, setChats] = useState(["Tanmayee", "Paras", "Manisha", "Devi"]);
  const [selected, setSelected] = useState(0);
  const [display, setDisplay] = useState(null);
  const styles = {
    position: "fixed",
    zIndex: "10000",
    height: "83vh",
    width: "88vw",
    top: "100px",
    right: "60px",
    backgroundColor: "#f86969",
    boxShadow:"1px 0px 30px black"
  };

  useEffect(() => {
    document.getElementById("navbar-container").style.boxShadow =
      "0px 0px 0px black";
    document.getElementById("chat-window-partition").style.width = "600px";
  }, []);
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
        <div className="chat-dm-list">
          {chats.map((ele, i) => {
            return (
              <div
                className={`chat-dm ${i === selected ? "chat-dm-active" : ""}`}
                onClick={() => setSelected(i)}
              >
                {ele}
              </div>
            );
          })}
        </div>
        <div
          className="create-grp"
          onClick={() => {
            setDisplay(styles);
          }}
        >
          +
        </div>
          <div style={display}></div>
      </div>
      <div
        className="chat-window-container"
        style={{
          backgroundColor: useColorMode("#d6d6d6", "rgba(32, 33, 36, 1)"),
        }}
      >
        <div className="chat-Profile">
          <div className="chat-avatar"></div>
          <div className="chat-name">{chats[selected]}</div>
          <hr id="chat-window-partition"></hr>
        </div>
        <div className="chat-messages-container"> No messages here...</div>
        <div className="chat-message-input">
          <input
            className="chat-input-message"
            placeholder="Type your messages here..."
            type="text"
          ></input>
        </div>
      </div>
    </div>
  );
};
