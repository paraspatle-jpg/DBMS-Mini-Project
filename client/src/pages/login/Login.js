import React from "react";
import { Link } from "react-router-dom";
import "./login.css";

export const Login = () => {
  return (
    <div className="main">
      <label htmlFor="chk" className="white ">
        Login
      </label>
      <input
        className="main-elements"
        name="email"
        placeholder="Email"
        required=""
      />
      <input
        className="main-elements"
        name="password"
        placeholder="Password"
        required=""
      />
      <button
        className="main-elements submit-button"
        id="login"
        type="button"
      >
        Login
      </button>
      <p className="element">Don't have an account?</p>
      <Link to="/SignUp" className="last">
        SignUp
      </Link>
    </div>
  );
};
