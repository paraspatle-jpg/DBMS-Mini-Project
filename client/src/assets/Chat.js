import * as React from "react"
import { useColorMode } from "../hooks/useColorMode";

const Chat = (props) => (
  <div className="nav-icons">
  <svg
  className="navIcons"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="-25 20 90 50"
    style={{
      fill:useColorMode("black","#f5f5f5" )
    }}
    xmlSpace="preserve"
    {...props}
  >
    <path d="M44.348 12.793H2.652A2.655 2.655 0 0 0 0 15.446v43.761l9.414-9.414h34.934A2.655 2.655 0 0 0 47 47.14V15.446a2.655 2.655 0 0 0-2.652-2.653zM11 22.793h12a1 1 0 1 1 0 2H11a1 1 0 1 1 0-2zm25 16H11a1 1 0 1 1 0-2h25a1 1 0 1 1 0 2zm0-7H11a1 1 0 1 1 0-2h25a1 1 0 1 1 0 2z" />
    <path d="M57.348.793H12.652A2.655 2.655 0 0 0 10 3.446v7.347h34.348A4.658 4.658 0 0 1 49 15.446v25.347h11V3.446A2.655 2.655 0 0 0 57.348.793z" />
  </svg>
  </div>
)

export default Chat;
