import { useEffect, useState } from "react";
import styled from "styled-components";
import { popularProducts } from "../../data";
import Product from "../Product/Product";
import { publicRequest, userRequest } from "../../requestMethod";
import axios from "axios";

const Container = styled.div`
  padding: 20px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

const Products = ({ cat, filters, sort }) => {
  const [products, setProducts] = useState([]);
  const [filterProducts, setFilterProducts] = useState([]);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        if (cat) {
          const res = await publicRequest.get(`/products?category=${cat}`);

          setProducts(res.data);
        } else {
          const res = await publicRequest.get(`/products`);
          setProducts(res.data);
        }
      } catch (err) {
        console.log(err);
      }
    };
    fetchProduct();
  }, []);
  useEffect(() => {
    cat &&
      setFilterProducts(
        products.filter((item) =>
          Object.entries(filters).every(([key, value]) =>
            item[key].includes(value)
          )
        )
      );
  }, [cat, products, filters]);
  useEffect(() => {
    if (sort === "newest") {
      setFilterProducts((prev) =>
        [...prev].sort((a, b) => a.createdAt - b.createdAt)
      );
    } else if (sort === "asc") {
      setFilterProducts((prev) => [...prev].sort((a, b) => a.price - b.price));
    } else {
      setFilterProducts((prev) => [...prev].sort((a, b) => b.price - a.price));
    }
  }, [sort]);

  return (
    <Container>
      {cat
        ? filterProducts.map((item) => <Product item={item} key={item._id} />)
        : products
            .slice(0, 10)
            .map((item) => <Product item={item} key={item._id} />)}
    </Container>
  );
};

export default Products;
