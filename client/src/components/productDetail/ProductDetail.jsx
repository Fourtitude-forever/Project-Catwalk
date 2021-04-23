import React from 'react';
import Slider from './Top/ImageSlider/Slider.jsx';
import ProductOverview from './Top/ProductOverview/ProductOverview.jsx';
import ProductDescription from './Down/ProductDescription.jsx';
import styled from 'styled-components';


const ProductDetailDiv = styled.div`
  border: 2px solid blue;
  position: relative;
  width:100%;
  height:90vh;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: center;

`;

const Top = styled.div`
  border: 5px solid green;
  position: relative;
  max-width: 90%;
  height:80%;
  display:flex;
  margin:0.5%;
`;

const Down = styled.div`
  border: 5px solid green;
  position: relative;
  max-width: 90%;
  height:20%;
  display:flex;
  margin:0.5%;
`;

function ProductDetail({ productID }) {
  return (
    <ProductDetailDiv>
      <Top>
        <Slider productID={productID} />
        <ProductOverview productID={productID} />
      </Top>
      <Down>
        <ProductDescription productID={productID} />
      </Down>
    </ProductDetailDiv>
  );
}

export default ProductDetail;