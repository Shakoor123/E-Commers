import { useEffect, useState } from "react";
import styled from "styled-components";
import { popularProducts } from "../../data";
import Product from "../Product/Product";
import {publicRequest,userRequest} from '../../requestMethod'

const Container = styled.div`
  padding: 20px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

const Products = ({cat,filters,sort}) => {
  const [products, setProducts] = useState([])
  const [filterProducts, setFilterProducts] = useState([])

  useEffect(() => {
  const fetchProduct=async()=>{
    try {
      const res=await publicRequest.get('/products');
      setProducts(res.data)
      console.log(products);
    } catch (err) {
      
    }
  }  
  fetchProduct()
    
  }, [])
  

  console.log(cat,filters,sort);
  return (
    <Container>
      {popularProducts.map((item) => (
        <Product item={item} key={item.id} />
      ))}
    </Container>
  );
};

export default Products;
