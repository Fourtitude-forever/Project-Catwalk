import React, { useState, useEffect} from 'react';
import styled from 'styled-components';
import axios from 'axios';
import PropTypes from 'prop-types';
import config from '../../../../../../config.js';
import {
  Headers2, Button
} from '../../../../css/sharedcss.jsx';

import StarRating from '../../../RatingsAndReviews/StarRating.jsx';

const ProductInfoDiv = styled.div`
  //border: 5px solid yellow;
  position: relative;
  //color: #187690;
  height:33%;
  display:flex;
  flex-direction: column;
  padding-left: 10px;
  padding-top:20px;
`;

const Cat = styled.div`
//border: 5px solid black;
  text-transform: uppercase;
  font-size: x-large;
  padding-bottom:10px
`;

const Title = styled.div`
//border: 5px solid black;
  font-weight: bold;
  font-size: xx-large;
  padding-bottom:10px;
`;

const Price = styled.div`
  font-size: large;
  margin-bottom: 5%;
`;

const Ratings = styled.span`
margin-bottom: 5%;
display: inline-block;
text-align: left;
`;

const A = styled.a`
font-size: 12px;
`;

function ProductInformation({ productID, stars }) {
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
      {loadingIcon}
      <Ratings>
        <StarRating stars={stars} />
        <A href="#readReviews">Read all reviews</A>
      </Ratings>

      <Cat>{category}</Cat>
      <Title>{title}</Title>
      <Price>{`$${price}`}</Price>
      {/* <div>Share on social media place holder</div> */}
    </ProductInfoDiv>
  );
}

ProductInformation.propTypes = {
  productID: PropTypes.number.isRequired,
};

export default ProductInformation;

