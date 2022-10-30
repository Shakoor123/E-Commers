import Navbar from "../../components/navbar/Navbar";
import NewTable from "../../components/newTable.jsx/NewTable";
import Sidebar from "../../components/sidebar/Sidebar";
import "./list.scss";

const List = () => {
  return (
    <div className="list">
      <Sidebar />
      <div className="listConntainer">
        <Navbar />
        <div className="tableConatiner">
          <div className="title">Product list</div>
          <NewTable />
        </div>
      </div>
    </div>
  );
};

export default List;
