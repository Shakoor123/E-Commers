import "./sidebar.scss";
import DashboardIcon from "@mui/icons-material/Dashboard";
import PeopleIcon from "@mui/icons-material/People";
import Inventory2TwoToneIcon from "@mui/icons-material/Inventory2TwoTone";
import BookmarkBorderOutlinedIcon from "@mui/icons-material/BookmarkBorderOutlined";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import ExitToAppOutlinedIcon from "@mui/icons-material/ExitToAppOutlined";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../context/darkmodeContext";
import { useNavigate } from "react-router-dom";

function Sidebar() {
  const navigate = useNavigate();
  const { setDark, setUser, user } = useContext(AuthContext);
  const logOutHandle = () => {
    if (user) {
      localStorage.removeItem("eCommersUser");
      setUser(null);
    }
    navigate("/login");
  };
  return (
    <div className="sidebar">
      <Link to={"/"} style={{ textDecoration: "none" }}>
        <div className="top">Kattippara</div>
      </Link>
      <hr />
      <div className="center">
        <ul>
          <p className="title">MAIN</p>
          <li>
            <Link to={"/"} style={{ textDecoration: "none" }}>
              <DashboardIcon className="icon" />
              <span>Dashboard</span>
            </Link>
          </li>
          <p className="title">LINKS</p>
          <Link to={"/list/users"} style={{ textDecoration: "none" }}>
            <li>
              <PeopleIcon className="icon" />
              <span>Users</span>
            </li>
          </Link>
          <Link to={"/list/products"} style={{ textDecoration: "none" }}>
            <li>
              <Inventory2TwoToneIcon className="icon" />
              <span>Products</span>
            </li>
          </Link>
          <Link to={"/list/orders"} style={{ textDecoration: "none" }}>
            <li>
              <BookmarkBorderOutlinedIcon className="icon" />
              <span>Orders</span>
            </li>
          </Link>

          <p className="title">USER</p>
          <li>
            <AccountCircleOutlinedIcon className="icon" />
            <span>Profile</span>
          </li>

          <li onClick={logOutHandle}>
            <ExitToAppOutlinedIcon className="icon" />
            <span>Log out</span>
          </li>
        </ul>
      </div>
      <div className="bottom">
        <div
          className="color"
          onClick={() => {
            setDark(false);
          }}
        ></div>
        <div
          className="color"
          onClick={() => {
            setDark(true);
          }}
        ></div>
      </div>
    </div>
  );
}

export default Sidebar;
