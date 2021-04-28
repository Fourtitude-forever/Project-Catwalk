import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import ProductInfo from './ProductInfo.jsx';
import Styles from './Styles.jsx';
import Selectors from './Selectors.jsx';

const ProducOverviewDiv = styled.div`
  border: 5px solid purple;
  position: relative;
  width: 30%;
  height:100%;
  box-sizing: border-box;
  display:flex;
  flex-direction: column;
`;

function ProductOverview({
  productID, styles, onStyleChange, styleId, selectedStyle
}) {
  return (
    <ProducOverviewDiv>
      <ProductInfo productID={productID} />
      <Styles styles={styles} onStyleChange={onStyleChange} />
      <Selectors selectedStyle={selectedStyle}/>
    </ProducOverviewDiv>
  );
}

ProductOverview.propTypes = {
  productID: PropTypes.number.isRequired,
  onStyleChange: PropTypes.func.isRequired,
  styleId: PropTypes.number.isRequired,
  styles: PropTypes.array.isRequired,
  selectedStyle: PropTypes.array.isRequired,
};

export default ProductOverview;
