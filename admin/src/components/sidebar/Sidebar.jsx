import "./sidebar.scss";
import DashboardIcon from "@mui/icons-material/Dashboard";
import PeopleIcon from "@mui/icons-material/People";
import Inventory2TwoToneIcon from "@mui/icons-material/Inventory2TwoTone";
import BookmarkBorderOutlinedIcon from "@mui/icons-material/BookmarkBorderOutlined";
import DeliveryDiningOutlinedIcon from "@mui/icons-material/DeliveryDiningOutlined";
import ListAltOutlinedIcon from "@mui/icons-material/ListAltOutlined";
import NotificationsActiveOutlinedIcon from "@mui/icons-material/NotificationsActiveOutlined";
import SurroundSoundOutlinedIcon from "@mui/icons-material/SurroundSoundOutlined";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import ExitToAppOutlinedIcon from "@mui/icons-material/ExitToAppOutlined";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../context/darkmodeContext";

function Sidebar() {
  const {setDark}=useContext(AuthContext)
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
            <DashboardIcon className="icon" />
            <span>Dashboard</span>
          </li>
          <p className="title">LINKS</p>
          <Link to={"/list"} style={{ textDecoration: "none" }}>
          <li>
              <PeopleIcon className="icon" />
              <span>Users</span>
          </li>
          </Link>
          <Link to={"/list"} style={{ textDecoration: "none" }}>
          <li>
            <Inventory2TwoToneIcon className="icon" />
            <span>Products</span>
          </li>
          </Link>
          <Link to={"/list"} style={{ textDecoration: "none" }}>
          <li>
            <BookmarkBorderOutlinedIcon className="icon" />
            <span>Orders</span>
          </li>
          </Link>
          <p className="title">USWEFULL</p>
          <li>
            <DeliveryDiningOutlinedIcon className="icon" />
            <span>Delivery</span>
          </li>
          <li>
            <ListAltOutlinedIcon className="icon" />
            <span>Status</span>
          </li>
          <li>
            <NotificationsActiveOutlinedIcon className="icon" />
            <span>Notifications</span>
          </li>
          <p className="title">SERVICE</p>
          <li>
            <SurroundSoundOutlinedIcon className="icon" />
            <span>System helth</span>
          </li>
          <p className="title">USER</p>
          <li>
            <AccountCircleOutlinedIcon className="icon" />
            <span>Profile</span>
          </li>
          <li>
            <SettingsOutlinedIcon className="icon" />
            <span>Settings</span>
          </li>
          <li>
            <ExitToAppOutlinedIcon className="icon" />
            <span>Log out</span>
          </li>
        </ul>
      </div>
      <div className="bottom">
        <div className="color" onClick={()=>{
          setDark(false)
        }}></div>
        <div className="color"
        onClick={()=>{
          setDark(true)
        }}
        ></div>
      </div>
    </div>
  );
}

export default Sidebar;
