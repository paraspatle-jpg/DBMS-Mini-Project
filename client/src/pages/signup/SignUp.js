import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Navigate } from "react-router-dom";
import { useColorMode } from "../../hooks/useColorMode";
import axios from "axios";
import "./signup.css";

export const SignUp = ({ auth, setAuth }) => {
  const [user, setUser] = useState({ username: "", email: "", password: "" });

  const handleChange = (e) => {
    e.preventDefault();
    setUser((prevState) => {
      console.log(user);
      return {
        ...prevState,
        [e.target.name]: e.target.value,
      };
    });
  };
  const body = user;

  const handleClick = async () => {
    try {
      const res = await axios.post("http://localhost:5000/auth/signup", body);
      if (res.data.message === "Signup Success") {
        console.log("Signup Success");
        localStorage.setItem("data", JSON.stringify(res.data));
        setAuth(localStorage.getItem("data"));
      }
    } catch (error) {
      console.log(error);
    }
  };

  // if(auth){
  //   return <Navigate to="/" replace={true} />
  // }

  return (
    <div
      className="main"
      style={{ height: "70%", background: useColorMode("white", "#161716") }}
    >
      <label htmlFor="chk" className="white">
        Sign Up
      </label>
      <input
        className="main-elements"
        type="text"
        name="username"
        placeholder="Username"
        required=""
        onChange={handleChange}
        style={{ color: useColorMode("black", "white") }}
      ></input>
      <input
        className="main-elements"
        type="email"
        name="email"
        placeholder="Email"
        onChange={handleChange}
        required=""
        style={{ color: useColorMode("black", "white") }}
      />
      <input
        className="main-elements"
        type="password"
        name="password"
        placeholder="Password"
        onChange={handleChange}
        required=""
        style={{ color: useColorMode("black", "white") }}
      />
      <button
        className="main-elements submit-button"
        id="signup"
        type="button"
        onClick={handleClick}
        style={{ color: useColorMode("white", "black") }}
      >
        SignUp
      </button>
      <p className="element ">Already have an account?</p>
      <Link
        to="/Login"
        className="white last"
        style={{ color: useColorMode("black", "white") }}
      >
        Login
      </Link>
    </div>
  );
};
