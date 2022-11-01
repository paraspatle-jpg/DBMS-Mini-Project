import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useColorMode } from "../../hooks/useColorMode";
import { SignUpModal } from "../../components/modal/SignUpModal";
import axios from "axios";
import "./signup.css";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

export const SignUp = ({ auth, setAuth }) => {
  const [user, setUser] = useState({
    username: "",
    email: "",
    password: "",
    avatar: "",
  });
  const [display, setDisplay] = useState(null);
  const styles = {
    position: "fixed",
    zIndex: "10000",
    height: "83vh",
    width: "88vw",
    top: "100px",
    right: "60px",
    backgroundColor: "#f86969",
    boxShadow: "1px 0px 30px black",
    opacity: 1,
  };

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
  let navigate = useNavigate();
  

  const handleClick = async () => {
    try {
      const res = await axios.post("http://localhost:5000/auth/signup", body);
      if (res.data.message === "Signup Success") {
        console.log("Signup Success");
        localStorage.setItem("data", JSON.stringify(res.data));
        setAuth(localStorage.getItem("data"));
        toast("Signed Up Successfully!!");
        navigate("/"); 
      }
    } catch (error) {
      console.log(error);
      setDisplay({});
      toast("Sign Up Failed..Try again!!");
    }
  };

  // if(auth){
  //   return
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
        onClick={() => {
          setDisplay(styles);
        }}
        style={{ color: useColorMode("white", "black") }}
      >
        SignUp
      </button>
      <div className="modal-container" style={display}>
        {display !== null ? (
          <div>
            <SignUpModal
              handleClick={handleClick}
              user={user}
              setUser={setUser}
              setDisplay={setDisplay}
            />
          </div>
        ) : (
          ""
        )}
      </div>
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
