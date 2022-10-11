import React from "react";
import "./App.css";
import { Header } from "./components/header/Header";
import { SideNavbar } from "./components/sidenav/SideNavbar";
import { Login } from "./pages/login/Login";
import { SignUp } from "./pages/signup/SignUp";
import { Homepage } from "./pages/homepage/Homepage";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Header />
      <div className="side-nav-container">
        <div className="side-nav-links-container">
        <SideNavbar />
        </div>
      </div>
      <div className="router-container">
        <Routes>
          <Route exact path="/" element={<Homepage />} />
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/signup" element={<SignUp />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
