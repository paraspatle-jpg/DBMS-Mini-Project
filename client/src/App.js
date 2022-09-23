import React from "react";
import "./App.css";
import Navbar from "./components/navbar/Navbar";
import { Body } from "./components/body/Body";
function App() {
  const [name,setName] = React.useState("Paru");
  setName("Tanu");
  return (
    <div className="App">
      <Navbar theplu={name} deplu={name}/>
      <Body />
    </div>
  );
}

export default App;
