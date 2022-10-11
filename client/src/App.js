import React from "react";
import "./App.css";
import {Navbar} from "./components/navbar/Navbar"
import Navbar1 from "./components/navbar1/Navbar";
import { Body } from "./components/body/Body";
function App() {
  const [name,setName] = React.useState("Paru");
  return (
    <div className="App">
      <Navbar/>
      {/* <Navbar1 theplu={name} deplu={name}/>
      <button onClick={()=>setName("Tanu")}>Click me</button>
      <Body /> */}
    </div>
  );
}

export default App;
