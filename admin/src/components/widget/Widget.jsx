import "./widget.scss";
import KeyboardArrowUpSharpIcon from "@mui/icons-material/KeyboardArrowUpSharp";
import PeopleOutlineSharpIcon from "@mui/icons-material/PeopleOutlineSharp";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import LocalAtmIcon from "@mui/icons-material/LocalAtm";
import AccountBalanceWalletOutlinedIcon from "@mui/icons-material/AccountBalanceWalletOutlined";
import CurrencyRupeeOutlinedIcon from "@mui/icons-material/CurrencyRupeeOutlined";
import { Link } from "react-router-dom";
import { userRequest } from "../../requestMethod";
import { useEffect, useState } from "react";
const Widget = ({ type }) => {
  const [length, setLength] = useState(0);
  useEffect(() => {
    const getUserss = async () => {
      try {
        const res = await userRequest.get("/users");
        setLength(res.data.length);
      } catch (err) {
        console.log(err);
      }
    };
    getUserss();
  }, []);

  let data;
  switch (type) {
    case "user":
      data = {
        title: "USER",
        isMony: false,
        link: "see all users",
        icon: (
          <PeopleOutlineSharpIcon
            style={{ backgroundColor: "violet", color: "darkviolet" }}
            className="icon"
          />
        ),
      };
      break;
    case "order":
      data = {
        title: "ORDER",
        isMony: false,
        link: "see all orders",
        icon: (
          <BookmarkBorderIcon
            className="icon"
            style={{ backgroundColor: "yellow", color: "gold" }}
          />
        ),
      };
      break;
    case "earning":
      data = {
        title: "EARNINGS",
        isMony: true,
        link: "View all earning",
        icon: (
          <LocalAtmIcon
            className="icon"
            style={{ backgroundColor: "lightgreen", color: "darkgreen" }}
          />
        ),
      };
      break;
    case "balance":
      data = {
        title: "BALANCE",
        isMony: true,
        link: "View all Balance",
        icon: (
          <AccountBalanceWalletOutlinedIcon
            className="icon"
            style={{ backgroundColor: "lightpuple ", color: "purple" }}
          />
        ),
      };
      break;
    default:
      break;
  }
  return (
    <div className="widget">
      <div className="left">
        <span className="title">{data.title}</span>
        <span className="counter">
          {data.isMony && (
            <CurrencyRupeeOutlinedIcon style={{ fontSize: 18 }} />
          )}
          {length}
        </span>
        <Link to={"/list/users"} style={{ textDecoration: "none" }}>
          <span className="link">{data.link}</span>
        </Link>
      </div>
      <div className="right">
        <div className="persentage positive">
          <KeyboardArrowUpSharpIcon />
          40%
        </div>
        {data.icon}
      </div>
    </div>
  );
};

export default Widget;
