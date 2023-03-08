import { Add, Remove } from "@mui/icons-material";
import styled from "styled-components";
import Anouncement from "../components/Anouncement/Anouncement";
import Footer from "../components/footer/Footer";
import Navbar from "../components/Navbar/Navbar";
import { mobile } from "../responsive";
import { useState, useEffect } from "react";
import { publicRequest } from "../requestMethod";
import { useLocation } from "react-router-dom";
import { addProduct } from "../redux/cartRedux";
import { useDispatch } from "react-redux";

const Wrapper = styled.div`
  padding: 20px;
  display: flex;
  ${mobile({ flexDirection: "column" })}
`;
const ImageContainer = styled.div`
  flex: 1;
`;
const Image = styled.img`
  width: 100%;
  height: 90vh;
  object-fit: contain;
`;
const InfoContainer = styled.div`
  padding: 0 50px;
  flex: 1;
  ${mobile({ padding: "10px" })}
`;
const Title = styled.h1`
  font-weight: 300px;
`;
const Desc = styled.p`
  margin: 20px 0;
`;
const Price = styled.span`
  font-weight: 100;
  font-size: 40px;
  margin-bottom: 30px;
`;
const FilterContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 50%;
`;
const Filter = styled.div`
  display: flex;
  align-items: center;
`;
const FilterTitle = styled.span`
  font-weight: 200;
  font-size: 20px;
`;
const FilterColor = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: ${(props) => props.color};
  margin: 0px 5px;
  cursor: pointer;
`;
const FilterSiize = styled.select`
  margin-left: 10px;
  padding: 5px;
`;

const FilterSiizeOption = styled.option``;

const AddContainer = styled.div`
  width: 50%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  ${mobile({ width: "100%" })}
`;

const AmountContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 700;
  margin-top: 30px;
`;

const Amount = styled.span`
  width: 30px;
  height: 30px;
  border-radius: 10px;
  border: 1px solid teal;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0px 5px;
`;

const Button = styled.button`
  padding: 13px;
  border: 2px solid teal;
  background-color: white;
  cursor: pointer;
  font-weight: 500;
  &:hover {
    background-color: #f8f4f4;
  }
`;

const Product = () => {
  const [product, setProduct] = useState({});
  const [count, setCount] = useState(1);
  const location = useLocation();
  const id = location.pathname.split("/")[2];
  const dispatch = useDispatch();
  const [size, setSize] = useState("");
  const [color, setcolor] = useState("");

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const res = await publicRequest.get(`products/find/${id}`);
        setProduct(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchProduct();
  }, []);
  const inc = () => {
    setCount(count + 1);
  };
  const dec = () => {
    count > 1 && setCount(count - 1);
  };
  const handdleClick = () => {
    dispatch(addProduct({ ...product, count, color, size }));
  };
  return (
    <div>
      <Anouncement />
      <Navbar />
      <Wrapper>
        <ImageContainer>
          <Image src={product.img}></Image>
        </ImageContainer>
        <InfoContainer>
          <Title>{product.title}</Title>
          <Desc>{product.desc}</Desc>
          <Price> rs {product.price}</Price>
          <FilterContainer>
            <Filter>
              <FilterTitle>color</FilterTitle>
              {product.color?.map((c) => (
                <FilterColor color={c} onClick={() => setcolor(c)} />
              ))}
            </Filter>
            <Filter>
              <FilterTitle>Size</FilterTitle>
              <FilterSiize onChange={(e) => setSize(e.target.value)}>
                {product.size?.map((s) => (
                  <FilterSiizeOption key={s} value={s}>
                    {s}
                  </FilterSiizeOption>
                ))}
              </FilterSiize>
            </Filter>
          </FilterContainer>
          <AddContainer>
            <AmountContainer>
              <Remove onClick={dec} />
              <Amount>{count}</Amount>
              <Add onClick={inc} />
            </AmountContainer>
            <Button onClick={handdleClick}>Add to Cart</Button>
          </AddContainer>
        </InfoContainer>
      </Wrapper>
      <Footer />
    </div>
  );
};

export default Product;
