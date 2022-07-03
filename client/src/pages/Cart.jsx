import React from "react";
import styled from "styled-components";
import Navbar from "../components/Navbar/Navbar";
import Anouncement from "../components/Anouncement/Anouncement";
import Footer from "../components/footer/Footer";
import { Add, Remove } from "@mui/icons-material";
import { mobile } from "../responsive";
const Container = styled.div``;
const Wrapper = styled.div`
  padding: 20px;
  text-align: center;
  ${mobile({padding: "10px"})} 

`;
const Title = styled.h1``;
const Top = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

`;

const TopBottom = styled.button`
  padding: 10px;
  font-weight: 600;
  cursor: pointer;
  background-color: white;
  border: ${(props) => props.type === "filled" && "none"};
  background-color: ${(props) => props.type === "filled" && "black"};
  color: ${(props) => props.type === "filled" && "white"};
`;
const TopTexts = styled.div``;
const TopText = styled.span`
  text-decoration: underline;
  cursor: pointer;
  margin: 0 10px;
  ${mobile({display:"none"})} 

`;

const Bottom = styled.div`
  display: flex;
  justify-content: space-between;
  ${mobile({flexDirection:"column"})} 

`;
const Info = styled.div`
 width
 flex: 3;
 `;
const Summery = styled.div`
  border: 0.5px solid lightgray;
  border-radius: 10px;
  padding: 20px;
  height: 50vh;
`;
const Product = styled.div`
  display: flex;
  justify-content: space-between;
  ${mobile({flexDirection:"column"})} 

`;
const ProductDetails = styled.div`
  flex: 3;
  display: flex;
  
`;
const Image = styled.img`
  padding: 20px;
  width: 200px;
`;
const Details = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  
`;
const ProductName = styled.span``;
const ProductId = styled.span``;
const ProductColor = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: ${(props) => props.color};
  
`;
const ProductSize = styled.span``;

const PriceDetails = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
const ProductAmountContainer = styled.div`
  display: flex;
  align-items: center;
`;
const ProductAmount = styled.div`
  font-size: 24px;
  margin: 10px;

`;
const ProductPrice = styled.div`
  font-size: 30px;
  font-weight: 200;
  ${mobile({marginRight:"20px"})} 

`;
const Hr = styled.hr`
  background-color: lightgray;
  border: none;
  height: 1px;
`;
const SummeryTitle = styled.h1`
  font-weight: 200;
`;
const SummeryItem = styled.div`
  margin: 30px 0px;
  display: flex;
  justify-content: space-between;
`;
const SummeryItemText = styled.span``;
const SummeryItemPrice = styled.span``;
const Button = styled.button`
  width: 100%;
  padding: 10px;
  background-color: black;
  color: white;
  font-weight: 600;
  cursor: pointer;
`;

const Cart = () => {
  return (
    <Container>
      <Anouncement />
      <Navbar />
      <Wrapper>
        <Title>Your Cart</Title>
        <Top>
          <TopBottom>Coontinue Shopping</TopBottom>
          <TopTexts>
            <TopText>shopping bag(2)</TopText>
            <TopText>Whatch lists(2)</TopText>
          </TopTexts>
          <TopBottom type="filled">Checkout Now</TopBottom>
        </Top>
        <Bottom>
          <Info>
            <Product>
              <ProductDetails>
                <Image src="https://images.pexels.com/photos/5480696/pexels-photo-5480696.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" />
                <Details>
                  <ProductName>
                    <b>Product : </b>Car Washer
                  </ProductName>
                  <ProductId>
                    <b> Id: </b>9995559990
                  </ProductId>
                  <ProductColor color="black" />
                  <ProductColor color="blue" />
                  <ProductColor color="green" />
                  <ProductSize>
                    <b> size: </b>10
                  </ProductSize>
                </Details>
              </ProductDetails>
              <PriceDetails>
                <ProductAmountContainer>
                  <Add />
                  <ProductAmount>3</ProductAmount>
                  <Remove />
                </ProductAmountContainer>
                <ProductPrice>RS 3000</ProductPrice>
              </PriceDetails>
            </Product>
            <Hr></Hr>
          </Info>
          <Summery>
            <SummeryTitle>ORDER Summery</SummeryTitle>
            <SummeryItem>
              <SummeryItemText>SubTotal</SummeryItemText>
              <SummeryItemPrice>Rs : 30</SummeryItemPrice>
            </SummeryItem>
            <SummeryItem>
              <SummeryItemText>SubTotal</SummeryItemText>
              <SummeryItemPrice>Rs : 30</SummeryItemPrice>
            </SummeryItem>
            <SummeryItem>
              <SummeryItemText>SubTotal</SummeryItemText>
              <SummeryItemPrice>Rs : 30</SummeryItemPrice>
            </SummeryItem>
            <Button>Check out Now</Button>
          </Summery>
        </Bottom>
      </Wrapper>
      <Footer />
    </Container>
  );
};

export default Cart;
