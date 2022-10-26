import React from 'react';
import "./Chat.css";
import { Link } from "react-router-dom";


export const Chat = () => {
  return (
    <div>
      <div className="navbar-chat">
        <div className="navbar-header-chat">
          <div className="dp-chat-1"></div>
        </div>
        <div className="nav-link-chat" to="#">Paras</div>
        <div className="nav-link-chat" to="#">Paras</div>
        <div className="nav-link-chat" to="#">Paras</div>
      </div>
      <div className="messages-chat">
        <div className="header-chat">
          <div className="dp-chat-2"></div>
        </div>
        <div className="text-chat">
          <div className="type-chat"></div>
        </div>
      </div>
    </div>
  )
}