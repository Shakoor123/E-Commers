import Navbar from "../../components/navbar/Navbar";
import RightChart from "../../components/rightChart/RightChart";

import LeftChart from "../../components/leftChart/LeftChart";
import Sidebar from "../../components/sidebar/Sidebar";
import Widget from "../../components/widget/Widget";
import "./home.scss";

const Home = () => {
  return (
    <div className="home">
      <Sidebar />
      <div className="homeContainer">
        <Navbar />
        <div className="widgetContainer">
          <Widget type="user" />
          <div className="widget"></div>
          <div className="widget"></div>
          <div className="widget"></div>
        </div>
        <div className="charts">
          {/* <LeftChart/> */}
          <RightChart />
        </div>
      </div>
    </div>
  );
};

export default Home;
