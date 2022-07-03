import React from "react";
import '../components/Signup/Signup.css'
const Login = () => {
  return (
    <div className="container">
      <div className="wrapper">
          <h1 className="hedding">LOG IN</h1>
          <div className="formInput">
          <input type="email" name="" placeholder="Enter Your Email" className="inputs" />
          <input type="text" name="" placeholder="Enter Your password" className="inputs" />
            </div>
          <button className="button">LOGIN</button>
      </div>
    </div>
  );
};

export default Login;
