import React from "react";
import { useState } from "react";
import "./Signup.css";
import { publicRequest } from "../../requestMethod";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { login } from "../../redux/apiCall";

const Signupc = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleSignUp = async () => {
    try {
      const res = await publicRequest.post("/auth/register", {
        username,
        email,
        password,
      });
      if (res.status == "200") {
        login(dispatch, { email, password });
      }
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div className="container">
      <div className="wrapper">
        <h1 className="hedding">CREATE AN ACOUNT</h1>
        <div className="formInput">
          <input
            type="text"
            name=""
            placeholder="Enter Your Name"
            className="inputs"
            onChange={(e) => {
              setUsername(e.target.value);
            }}
          />
          <input
            type="email"
            name=""
            placeholder="Enter Your Email"
            className="inputs"
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
          <input
            type="password"
            name=""
            placeholder="Enter Your password"
            className="inputs"
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
          <input
            type="password"
            name=""
            placeholder="ReEnter Your password"
            className="inputs"
          />
        </div>
        <button className="button" onClick={handleSignUp}>
          CREATE
        </button>
      </div>
    </div>
  );
};

export default Signupc;
