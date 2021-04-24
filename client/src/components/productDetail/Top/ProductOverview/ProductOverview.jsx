import React, { useState, useEffect} from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import ProductInfo from './ProductInfo.jsx';
import Styles from './Styles.jsx'
import Selector from './Selector.jsx'

const ProducOverviewDiv = styled.div`
  border: 5px solid purple;
  position: relative;
  width: 30%;
  height:100%;
  box-sizing: border-box;
  display:flex;
  flex-direction: column;
`;

function ProductOverview({ productID }) {
  return (
    <ProducOverviewDiv>
      <ProductInfo productID={productID} />
      <Styles />
      <Selector />
    </ProducOverviewDiv>
  );
}

ProducOverviewDiv.propTypes = {
  productID: PropTypes.number.isRequired,
};

export default ProductOverview;