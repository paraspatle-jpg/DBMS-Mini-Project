import React from 'react'
import { Link} from "react-router-dom";
import './SideNavbar.css'
export const SideNavbar = () => {
  return (
    <nav id="navbar">
          <a className="nav-link">Home</a>

          <a className="nav-link"><Link to="/Login">Login</Link></a>
       
          <a className="nav-link"><Link to="/SignUp">SignUp</Link></a>
        
          <a className="nav-link" >Playlist</a>
        
          <a className="nav-link">Favourites</a>
        
          <a className="nav-link">Chat</a>
        
          <a className="nav-link">Find a Friend</a>
      </nav>
  )
}
