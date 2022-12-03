import React from "react";
import "./customTable.scss";
const CustomTable = ({ datas, type }) => {
  return (
    <>
      <table className="table">
        <tr className="top">
          <th>_id</th>
          <th>title</th>
          <th>description</th>
          <th>price</th>
          <th>Instock</th>
          <th>Sizes</th>
          <th>colors</th>
        </tr>
        <tr>
          <td>844646</td>
          <td>black jacket</td>
          <td>200</td>
          <td>true</td>
          <td>m,s,l</td>
          <td>black , green , yellow</td>
        </tr>
      </table>
    </>
  );
};

export default CustomTable;
