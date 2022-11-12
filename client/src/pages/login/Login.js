import React,{ useState} from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import {useColorMode} from "../../hooks/useColorMode"
import axios from "axios";
import "./login.css";

export const Login = ({ auth, setAuth}) => {
  const [user, setUser] = useState({ email: "", password: "" });
  let navigate = useNavigate();

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
  const body =user;

  const handleClick = async () =>{
    try {
      const res = await axios.post("http://localhost:5000/auth/login",body);
      if(res.data.message === "Login Success")
      {
        console.log("Login Success")
        localStorage.setItem("data",JSON.stringify(res.data));
        setAuth(localStorage.getItem("data"));
        navigate("/"); 
      }

    } catch (error) {
      console.log(error);
    }
  }
  // if(auth){
  //   return <Navigate to="/" replace={true} />
  // }

  return (
    <div className="main" style={{background:useColorMode("white","#161716")}}>
      <label htmlFor="chk" className="white ">
        Login
      </label>
      <input
        className="main-elements"
        name="email"
        placeholder="Email"
        onChange={handleChange}
        required="true"
        style={{color:useColorMode("black","white")}}
      />
      <input
        className="main-elements"
        name="password"
        placeholder="Password"
        onChange={handleChange}
        required="true"
        style={{color:useColorMode("black","white")}}
      />
      <button
        className="submit-button"
        id="login"
        type="button"
        onClick={handleClick}
        style={{color:useColorMode("white","black")}}
      >
        Login
      </button>
      <p className="element">Don't have an account?</p>
      <Link to="/SignUp" className="last" style={{color:useColorMode("black","white")}}>
        SignUp
      </Link>
    </div>
  );
};
