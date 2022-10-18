import React from 'react'
import { Link} from "react-router-dom";
import './SideNavbar.css'
export const SideNavbar = () => {
  return (
    <nav id="navbar">
          <Link to="/home" className="nav-link">Home</Link>

          <Link to="/login" className="nav-link">Login</Link>
       
          <Link to="/signUp" className="nav-link">SignUp</Link>
        
          <Link to="/playlist" className="nav-link" >Playlist</Link>
        
          <Link to="/favourites" className="nav-link" >Favourites</Link>
        
          <Link to="/chat" className="nav-link">Chat</Link>
        
          <Link to="/find-a-friend" className="nav-link">Find a Friend</Link>
      </nav>
  )
}
