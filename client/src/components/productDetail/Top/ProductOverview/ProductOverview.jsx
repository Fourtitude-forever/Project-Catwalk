import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import ProductInfo from './ProductInfo.jsx';
import Styles from './Styles.jsx';
import Selectors from './Selectors.jsx';

const ProducOverviewDiv = styled.div`
  position: absolute;
  right: 0px;
  width: 35%;
  height:100%;
  box-sizing: border-box;
  display:flex;
  flex-direction: column;
  z-index: 1;
  background-color: #f6f5f5;
`;

function ProductOverview({
  productID, styles, onStyleChange, selectedStyle, onStarChange, average

}) {
  return (
    <ProducOverviewDiv>
      <ProductInfo productID={productID} stars={average} />
      <Styles styles={styles} onStyleChange={onStyleChange} />
      <Selectors selectedStyle={selectedStyle} onStarChange={onStarChange} />
    </ProducOverviewDiv>
  );
}

ProductOverview.propTypes = {
  productID: PropTypes.number.isRequired,
  onStyleChange: PropTypes.func.isRequired,
  styles: PropTypes.array.isRequired,
  selectedStyle: PropTypes.array.isRequired,
};

export default ProductOverview;
