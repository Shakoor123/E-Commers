import { Search } from "@mui/icons-material";
import { Badge } from "@mui/material";
import React from "react";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import "./Navbar.css";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Navbar = () => {
  const quantity = useSelector((state) => state.cart.quantity);

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
          <h1 className="logo">Dark_Shop</h1>
        </div>
        <div className="right">
          <Link style={{ textDecoration: "none" }} to={"/signup"}>
            <span className="buttonn">REGISTER</span>
          </Link>
          <Link style={{ textDecoration: "none" }} to={"/login"}>
            <span className="buttonn">LOG_IN</span>
          </Link>
          <Badge badgeContent={quantity} color="primary">
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
