import React from "react";

const Navbar = () => {
  return (
    <div>
      <nav className="container">
        <div className="">
          <img
            src="./images/nikelogo.png"
            type="logo" className="first-img" height='100px'
            
          ></img>
        </div>
        <div>
          <ul>
            <li>Menu</li>
            <li>Location</li>
            <li>About</li>
            <li>Contact</li>
          </ul>
        </div>
        <button className="btn-1">LOGIN</button>
      </nav>
    </div>
  );
};

export default Navbar;
