import React from 'react'
import { Link} from "react-router-dom";
import '../../components/header/Header.css'
import './signup.css'

export const SignUp = () => {
  return (
    <div className="main">
      <label htmlFor="chk" >Sign Up</label>
      <input className="main-elements" type="text" name="txt" placeholder="User name" required="" />
      <input className="main-elements" type="email" name="email" placeholder="Email" required="" />
      <input className="main-elements" type="password" name="pswd" placeholder="Password" required="" />
      <button className="main-elements" style={{ width: '60%' }} id="signup" type="button" >Sign up</button>
      <p className="element">Already have an account?<a><Link to="/Login">Login</Link></a></p>
    </div>
  )
}
