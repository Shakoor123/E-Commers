import Navbar from "../../components/navbar/Navbar";
import NewTable from "../../components/newTable.jsx/NewTable";
import Sidebar from "../../components/sidebar/Sidebar";
import { useLocation } from "react-router-dom";
import "./list.scss";
import { useEffect, useState } from "react";
import { publicRequest } from "../../requestMethod";
import CustomTable from "../../components/customTable/CustomTable";
const List = () => {
  const [datas, setDatas] = useState([]);
  const [users, setUsers] = useState([]);
  const location = useLocation();
  const type = location.pathname.split("/")[2];
  useEffect(() => {
    const getDatas = async () => {
      try {
        if (type == "users") {
          const res = await publicRequest.get(`/${type}`);
          setUsers(res.data);
        } else {
          const res = await publicRequest.get(`/${type}`);
          setDatas(res.data);
        }
      } catch (err) {
        console.log(err);
      }
    };
    getDatas();
  }, [type]);

  return (
    <div className="list">
      <Sidebar />
      <div className="listConntainer">
        <Navbar />
        <div className="tableConatiner">
          <div className="title">{type}</div>
          {type == "users" ? (
            <NewTable datas={users} type={type} />
          ) : (
            <CustomTable datas={datas} type={type} />
          )}
        </div>
      </div>
    </div>
  );
};

export default List;
