import React from 'react'
import { Link} from "react-router-dom";
import '../../components/header/Header.css'
// import './signup.css'

export const friend = () => {
  return (
    <div className="main">
      <label htmlFor="chk" className="white" >Sign Up</label>
      {/* <input className="main-elements" type="text" name="txt" placeholder="&#xF002; Username" required="" />
      <input className="main-elements" type="email" name="email" placeholder="Email" required="" />
      <input className="main-elements" type="password" name="pswd" placeholder="Password" required="" />
      <button className="main-elements submit-button" style={{ width: '60%' }} id="signup" type="button" >SignUp</button>
      <p className="element ">Already have an account?</p>
      <Link to="/Login" className="white last">Login</Link> */}
    </div>
  )
}
