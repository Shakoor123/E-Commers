import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Navbar from "../components/Navbar/Navbar";
import Anouncement from "../components/Anouncement/Anouncement";
import Footer from "../components/footer/Footer";
import { Add, Remove } from "@mui/icons-material";
import { mobile } from "../responsive";
import { useSelector } from "react-redux";
import StripeCheckout from 'react-stripe-checkout'
import {userRequest} from '../requestMethod'
import { useNavigate } from "react-router-dom";

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
const SummeryItemText1 = styled.span`
color:green;

`;
const SummeryItemPrice1 = styled.span``;
const Button = styled.button`
  width: 100%;
  padding: 10px;
  background-color: black;
  color: white;
  font-weight: 600;
  cursor: pointer;
`;

const Cart = () => {
  const KEY=process.env.REACT_APP_STRIPE;
  const cart=useSelector(state=>state.cart)
  const [stripeToken, setStripeToken] = useState(null)
  const navigate=useNavigate();

  const onToken=(token)=>{
    setStripeToken(token)
  }

  useEffect(() => {
   
    const makeRequest=async()=>{
      try {
        const res=await userRequest.post('checkout/payment',{
          tokenId:stripeToken.id,
          amount:cart.total * 100,
          
        })
        navigate("/success",{data:res.data});
      } catch (err) {
        console.log(err);
      }
    }
    stripeToken && makeRequest()
  }, [stripeToken])
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
            {cart.products.map(product=>(
            <Product>
              <ProductDetails>
                <Image src={product.img} />
                <Details>
                  <ProductName>
                    <b>Product : </b>{product.title}
                  </ProductName>
                  <ProductId>
                    <b> Id: </b>{product._id}
                  </ProductId>
                  <ProductColor color={product.color} />
                  <ProductSize>
                    <b> size: </b>{product.size}
                  </ProductSize>
                </Details>
              </ProductDetails>
              <PriceDetails>
                <ProductAmountContainer>
                  <Add />
                  <ProductAmount>{product.count}</ProductAmount>
                  <Remove />
                </ProductAmountContainer>
                <ProductPrice>RS {product.price*product.count}</ProductPrice>
              </PriceDetails>
            </Product>))}
            <Hr></Hr>
          </Info>
          <Summery>
            <SummeryTitle>ORDER Summery</SummeryTitle>
            <SummeryItem>
              <SummeryItemText>SubTotal</SummeryItemText>
              <SummeryItemPrice>{cart.total}</SummeryItemPrice>
            </SummeryItem>
            <SummeryItem>
              <SummeryItemText>Estimation shopping</SummeryItemText>
              <SummeryItemPrice>Rs : 50</SummeryItemPrice>
            </SummeryItem>
            <SummeryItem>
              <SummeryItemText>Shipping Discount</SummeryItemText>
              <SummeryItemPrice>Rs : 50</SummeryItemPrice>
            </SummeryItem>
            <SummeryItem>
              <SummeryItemText1>Total</SummeryItemText1>
              <SummeryItemPrice1>{cart.total}</SummeryItemPrice1>
            </SummeryItem>
              <StripeCheckout
              name="kattipara shop"
              image="https://avathars.githubusercontent.com/u/1486366?v=4"
              billingAddress
              shippingAddress
              description={`your total is RS${cart.total}`}
              amount={cart.total*100}
              token={onToken}
              stripeKey={KEY}
              >
              <Button>Check out Now</Button>
              </StripeCheckout>

            
          </Summery>
        </Bottom>
      </Wrapper>
      <Footer />
    </Container>
  );
};

export default Cart;
