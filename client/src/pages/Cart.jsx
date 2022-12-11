import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Navbar from "../components/Navbar/Navbar";
import Anouncement from "../components/Anouncement/Anouncement";
import Footer from "../components/footer/Footer";
import { Add, Remove } from "@mui/icons-material";
import { mobile } from "../responsive";
import { useSelector } from "react-redux";
import StripeCheckout from "react-stripe-checkout";
import { userRequest } from "../requestMethod";
import { useNavigate } from "react-router-dom";

const Container = styled.div``;
const Wrapper = styled.div`
  padding: 20px;
  text-align: center;
  ${mobile({ padding: "10px" })}
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
  ${mobile({ display: "none" })}
`;

const Bottom = styled.div`
  display: flex;
  justify-content: space-between;
  ${mobile({ flexDirection: "column" })}
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
  ${mobile({ flexDirection: "column" })}
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
  ${mobile({ marginRight: "20px" })}
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
  color: green;
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
  const KEY =
    "pk_test_51MDnWbSJtKGUb1RhOcvfrOYkCAukkVV2ZhcqU1MCGeMAexEwOh3hV9eX1aR1jSiAUHGMbiRhBOiRKx7plKyn7InY00epcw59ps";
  const cart = useSelector((state) => state.cart);
  const [stripeToken, setStripeToken] = useState(null);
  const navigate = useNavigate();

  const onToken = (token) => {
    setStripeToken(token);
  };

  useEffect(() => {
    const makeRequest = async () => {
      try {
        const res = await userRequest.post("checkout/payment", {
          tokenId: stripeToken.id,
          amount: cart.total,
        });
        navigate("/success", { data: res.data });
      } catch (err) {
        console.log(err);
        navigate("/");
      }
    };
    stripeToken && makeRequest();
  }, [stripeToken]);
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
            {cart.products.map((product) => (
              <Product key={product._id}>
                <ProductDetails>
                  <Image src={product.img} />
                  <Details>
                    <ProductName>
                      <b>Product : </b>
                      {product.title}
                    </ProductName>
                    <ProductId>
                      <b> Id: </b>
                      {product._id}
                    </ProductId>
                    <ProductColor color={product.color} />
                    <ProductSize>
                      <b> size: </b>
                      {product.size}
                    </ProductSize>
                  </Details>
                </ProductDetails>
                <PriceDetails>
                  <ProductAmountContainer>
                    <Add />
                    <ProductAmount>{product.count}</ProductAmount>
                    <Remove />
                  </ProductAmountContainer>
                  <ProductPrice>
                    RS {product.price * product.count}
                  </ProductPrice>
                </PriceDetails>
              </Product>
            ))}
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
              image="data:image/jpeg;base64,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"
              billingAddress
              shippingAddress
              description={`your total is RS${cart.total}`}
              amount={cart.total * 100}
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
