import React from "react";

const Firstsection = () => {
  return (
    <div className="main-thing container">
      <div className="main-2">
        <h1>YOUR FEET DESERVE THE BEST</h1>
        <p>
          YOUR FEET DESERVE THE BEST AND WERE HERE TO HELP YOU WITH OUR SHOES.
          YOUR FEET DESERVE THE BEST AND WERE HERE TO HELP YOU WITH OUR SHOES.
        </p>
        <div className="btn">
          <button className="btn-2">Shop Now</button>
          <button className="btn-3">Category</button>
        </div>
        <div className="shopping">
          <p className="paragraph">Also available on</p>
          <div className="available">
            <img
              src="./images/amazonlogo.png"
              type="logo"
              height="60px"
              width="auto"
            ></img>
            <img
              src="./images/flipkartlogo.png"
              type="logo"
              height="50px"
              width="auto"
            ></img>
          </div>
        </div>
      </div>
      <div className="main-image">
        <img src="./images/shoelogo.png" type="logo" ></img>
      </div>
    </div>
  );
};

export default Firstsection;
