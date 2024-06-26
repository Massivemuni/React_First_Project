import React from "react";
import "./App.css";
import Navbar from "./Navbar";
import Firstsection from "./Firstsection";

const App = () => {
  return (
    <div className="main">
      <div>
       <Navbar/>
       <Firstsection />
      </div>
    </div>
  );
};

export default App;
