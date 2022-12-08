import { Search } from "@mui/icons-material";
import { Badge } from "@mui/material";
import React from "react";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import "./Navbar.css";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { useState } from "react";
import { logoutUser } from "../../redux/userRedux";

const Navbar = () => {
  const dispatch = useDispatch();
  const quantity = useSelector((state) => state.cart.quantity);
  const cuser = useSelector((state) => state.user.currentUser);
  const handleLogout = () => {
    localStorage.removeItem("eCommers");
    dispatch(logoutUser());
  };
  return (
    <div className="navbar">
      <div className="wrappern">
        <div className="left">
          <span className="span">EN</span>

          <div className="inputContainer">
            <input className="input"></input>
            <Search style={{ color: "gray", fontSize: 16 }} />
          </div>
        </div>
        <div className="center">
          <Link to={"/"} style={{ textDecoration: "none" }}>
            <h1 className="logo">Dark_Shop</h1>
          </Link>
        </div>
        <div className="right">
          {cuser ? (
            <>
              <span className="username">{cuser.username}</span>
            </>
          ) : (
            <>
              {/* <Link style={{ textDecoration: "none" }} to={"/signup"}>
                <span className="buttonn">REGISTER</span>
              </Link> */}

              <Link style={{ textDecoration: "none" }} to={"/login"}>
                <span className="buttonn">LOG_IN</span>
              </Link>
            </>
          )}
          <Badge badgeContent={quantity} color="primary">
            <span className="logout" onClick={handleLogout}>
              logout
            </span>

            <Link to={"/cart"}>
              <ShoppingCartOutlinedIcon />
            </Link>
          </Badge>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
