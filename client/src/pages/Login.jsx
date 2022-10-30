import React from "react";
import "../components/Signup/Signup.css";
import { useDispatch } from "react-redux";
import { useState } from "react";
import { login } from "../redux/apiCall";
const Login = () => {
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleClick = () => {
    login(dispatch, { email, password });
  };
  return (
    <div className="container">
      <div className="wrapper">
        <h1 className="hedding">LOG IN</h1>
        <div className="formInput">
          <input
            type="email"
            name=""
            placeholder="Enter Your Email"
            className="inputs"
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            name=""
            placeholder="Enter Your password"
            className="inputs"
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <button className="button" onClick={handleClick}>
          LOGIN
        </button>
      </div>
    </div>
  );
};

export default Login;
