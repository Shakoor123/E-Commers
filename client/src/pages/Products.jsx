import Announcement from "../components/Anouncement/Anouncement";
import React, { useState } from "react";
import Navbar from "../components/Navbar/Navbar";
import Categories from "../components/Categories/Categories";
import Products from "../components/Products/Products";
import Footer from "../components/footer/Footer";
import styled from "styled-components";
import { useLocation } from "react-router-dom";

const Title = styled.h1`
  margin: 20px;
`;
const FilterContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;
const Filter = styled.div`
  margin: 20px;
`;
const FilterText = styled.span`
  font-size: 20px;
  margin-right: 20px;
  font-weight: 600;
  
`;
const Select = styled.select`
  padding: 10px;
  margin-right: 20px;
  background-color: white;
  border:1px solid brown;

`;
const Option = styled.option``;

const Productss = () => {
  const location=useLocation();
  const cat=location.pathname.split('/')[2];
  
  const [filters, setFilters] = useState({})
  const [sort, setSort] = useState("newest")
  const handleFilter=(e)=>{
    const value=e.target.value;
    setFilters({
      ...filters,
      [e.target.name]:value,
    })
    
  }
  return (
    <div>
      <Announcement />
      <Navbar />
      <Title>{cat}</Title>
      <FilterContainer>
        <Filter>
          <FilterText>Filter Products</FilterText>
          <Select onChange={handleFilter} name="color">
            <Option disabled  >
              Color
            </Option>
            <Option value="green">green</Option>
            <Option value="black">black</Option>
            <Option value="red">red</Option>
          </Select>
          <Select onChange={handleFilter} name="size">
            <Option  selected>
              Size
            </Option>
            <Option value="S">S</Option>
            <Option value="M">M</Option>
            <Option value="L">L</Option>
          </Select>
        </Filter>
        <Filter>
          <FilterText>Sort Products</FilterText>
          <Select onChange={e=>setSort(e.target.value)}>
            <Option selected value="newest">Newest</Option>
            <Option value="desc">Price (desc)</Option>
            <Option value="asc">Price (asc)</Option>
          </Select>
        </Filter>
      </FilterContainer>
      <Products cat={cat} filters={filters} sort={sort} />
      <Footer />
    </div>
  );
};

export default Productss;
