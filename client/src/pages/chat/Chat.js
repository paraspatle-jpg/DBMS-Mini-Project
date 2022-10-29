import React, { useState, useEffect } from "react";
import { useColorMode } from "../../hooks/useColorMode.js";
import ReactModal from "react-modal";
import { useModal } from "react-modal-hook";
import "./Chat.css";

ReactModal.setAppElement("#root")

export const Chat = () => {
  const [chats, setChats] = useState(["Tanmayee", "Paras", "Manisha", "Devi"]);
  const [selected, setSelected] = useState(0);

  const [showModal, hideModal] = useModal(() => (
    <ReactModal closeTimeoutMS={200} isOpen>
      <p>Modal content</p>
      <button onClick={hideModal}>Hide modal</button>
    </ReactModal>
  ));

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
        <div className="create-grp" onClick={showModal}>+</div>
      </div>
      {/* <hr className="partition"></hr> */}
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
