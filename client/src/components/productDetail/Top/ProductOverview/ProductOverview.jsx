import React, { useState, useEffect} from 'react';
import styled from 'styled-components';
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




function ProductOverview() {
  return (
    <ProducOverviewDiv>
      <ProductInfo />
      <Styles />
      <Selector />
    </ProducOverviewDiv>
  );
};





export default ProductOverview