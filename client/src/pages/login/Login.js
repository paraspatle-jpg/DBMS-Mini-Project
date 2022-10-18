import React from 'react'
import { Link} from "react-router-dom";
import './login.css'

export const Login = () => {
  return (
    <div className="main">
    <label htmlFor="chk" >Login</label>
    <input className="main-elements" type="email" name="email" placeholder="Email" required="" />
    <input className="main-elements" type="password" name="pswd" placeholder="Password" required="" />
    <button className="main-elements submit-button" style={{ width: '60%' }} id="login" type="button" >Login</button>
    <p className="element">Don't have an account?</p>
    <Link to="/SignUp" className="last">SignUp</Link>
  </div>
  )
}
