import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import axios from 'axios';
import config from '../../../../../config.js';

const DescriptionDiv = styled.div`
  font-size: medium;
  padding-left:10px;
  padding-top:20px;
`;

function ProductDescription({ productID }) {

  const [isloading, setLoading] = useState(false);
  const [description, setDescription] = useState('');

  useEffect(() => {
    setLoading(true);
    axios(`https://app-hrsei-api.herokuapp.com/api/fec2/hr-sfo/products/${productID}`, { headers: config })
      .then((list) => {
        setDescription(list.data.description);
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
    <DescriptionDiv>
      {loadingIcon}
      {description}
    </DescriptionDiv>
  );
}



export default ProductDescription