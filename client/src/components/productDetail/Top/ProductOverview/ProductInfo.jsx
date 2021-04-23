import React, { useState, useEffect} from 'react';
import styled from 'styled-components';
import axios from 'axios';
import config from '../../../../../../config.js';

const ProductInfoDiv = styled.div`
  border: 5px solid yellow;
  position: relative;
  height:33%;
  display:flex;
  flex-direction: column;
  padding-left: 10px;
  padding-top:20px
`;

const Cat = styled.div`
  text-transform: uppercase;
  font-size: 20px;
  padding-bottom:10px
`;

const Title = styled.div`
  font-weight: bold;
  font-size: 30px;
  padding-bottom:10px;
`;

const Price = styled.div`
  font-size: 20px;
`;

function ProductInformation({ productID }) {
  const [isloading, setLoading] = useState(false);
  const [category, setCategory] = useState('');
  const [title, setTitle] = useState('');
  const [price, setPrice] = useState();

  useEffect(() => {
    setLoading(true);
    axios(`https://app-hrsei-api.herokuapp.com/api/fec2/hr-sfo/products/${productID}`, { headers: config })
      .then((list) => {
        setCategory(list.data.category);
        setTitle(list.data.name);
        setPrice(list.data.default_price);
        setLoading(false);
      })
      .catch((err) => {
        throw err;
      });
  }, []);

  let loadingIcon;
  if (isloading) {
    loadingIcon = <p>Please wait...loading</p>;
  }


  return (
    <ProductInfoDiv>
      <div>{loadingIcon}</div>
      <div>☆☆☆☆☆</div>
      <Cat>{category}</Cat>
      <Title>{title}</Title>
      <div>{price}</div>
      {/* <div>Share on social media place holder</div> */}
    </ProductInfoDiv>
  );
}

export default ProductInformation