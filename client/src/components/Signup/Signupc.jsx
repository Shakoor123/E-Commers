import React from "react";
import './Signup.css'
const Signupc = () => {
  return (
    <div className="container">
      <div className="wrapper">
          <h1 className="hedding">CREATE AN ACOUNT</h1>
          <div className="formInput">
          <input type="text" name="" placeholder="Enter Your Name" className="inputs" />
          <input type="email" name="" placeholder="Enter Your Email" className="inputs" />
          <input type="text" name="" placeholder="Enter Your password" className="inputs" />
          <input type="text" name="" placeholder="ReEnter Your password" className="inputs" />
            </div>
          <button className="button">CREATE</button>
      </div>
    </div>
  );
};

export default Signupc;