import React from "react";
import "./customTable.scss";
import { Link } from "react-router-dom";
const CustomTable = ({ datas, type }) => {
  return (
    <>
      <Link to={"/new/product"}>
        <button className="button">Add New Product</button>
      </Link>
      <table className="table">
        <thead>
          <tr className="top">
            <th>_id</th>
            <th>title</th>
            <th>description</th>
            <th>price</th>
            <th>Instock</th>
            <th>Sizes</th>
            <th>colors</th>
          </tr>
        </thead>
        <tbody>
          {datas.map((product) => (
            <tr className="bottom" key={product._id}>
              <td>{product._id}</td>
              <td>{product.title}</td>
              <td>{product.desc}</td>
              <td>{product.price}</td>
              <td>{product.inStock ? "Available" : "Not Available"}</td>
              <td>m,s,l</td>
              <td>black , green , yellow</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default CustomTable;
