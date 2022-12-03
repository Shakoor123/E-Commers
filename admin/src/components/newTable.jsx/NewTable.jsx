import "./newTable.scss";
import react, { useEffect } from "react";
import { DataGrid, GridColDef, GridValueGetterParams } from "@mui/x-data-grid";
import { Link } from "react-router-dom";

const users = [
  { field: "_id", headerName: "ID", width: 210 },

  {
    field: "username",
    headerName: "Full name",
    description: "This column has a value getter and is not sortable.",
    width: 160,
  },
  {
    field: "email",
    headerName: "Email",
    type: "email",
    width: 340,
  },
];

const rows = [
  {
    id: 1,
    fullname: "Snow Jon",
    email: "active",
    profile: "ksjdvkk",
  },
  { id: 2, fullname: "Lannister", email: "Cersei", age: 42 },
];

export default function NewTable({ datas, type }) {
  console.log(datas);
  console.log(type);
  useEffect(() => {}, []);

  return (
    <div style={{ height: 600, width: "50%" }} className="NewTable">
      <Link to={"/new/user"}>
        <button className="button">Add New User</button>
      </Link>
      <DataGrid
        className="colum"
        rows={datas}
        columns={type === "users" && users}
        pageSize={9}
        rowsPerPageOptions={[5]}
        checkboxSelection
      />
    </div>
  );
}
