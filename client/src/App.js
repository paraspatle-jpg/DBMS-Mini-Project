import React,{ useState} from "react";
import "./App.css";
import { Header } from "./components/header/Header";
import { SideNavbar } from "./components/sidenav/SideNavbar";
import { Login } from "./pages/login/Login";
import { SignUp } from "./pages/signup/SignUp";
import { Homepage } from "./pages/homepage/Homepage";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  const [auth,setAuth] = useState(localStorage.getItem("data"));
  return (
    <Router>
      <Header auth={auth} setAuth={setAuth}/>
      <div className="side-nav-container">
        <div className="side-nav-links-container">
        <SideNavbar  auth={auth} setAuth={setAuth} />
        </div>
      </div>
      <div className="router-container">
        <Routes>
          <Route exact path="/" element={<Homepage  auth={auth} setAuth={setAuth} />} />
          <Route exact path="/login" element={<Login  auth={auth} setAuth={setAuth} />} />
          <Route exact path="/signup" element={<SignUp  auth={auth} setAuth={setAuth} />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
