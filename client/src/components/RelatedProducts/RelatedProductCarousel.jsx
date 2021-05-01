import React, { useState, useEffect } from 'react';
import ProductCard from './ProductCard.jsx';
import styled from 'styled-components';
import { get } from 'lodash';
import {Button} from '../../css/sharedcss.jsx';

const CarouselDiv = styled.div`
display: flex;
justify-content: center;
align-items: center;
//border: 3px solid orange;
margin: 20px;
padding: 10px;
height: 350px;
width: 85%;

position: relative;
`;

const ProductCards = styled.div`
display: flex;
width: 85%;
height: 350px;
margin: 200px auto;
overflow-x: auto;
//border: 3px solid blue ;
`;

const PrevButton = styled(Button)`
height:60px;
width: 60px;
position: absolute;
font-size: 30px;
font-weight: bold;
cursor: pointer;
z-index: 1;
border-radius:50%;
top: 45%;
-ms-transform: translateY(-50%);
transform: translateY(-50%);
`;

const NextButton = styled(Button)`
height:60px;
width: 60px;
position: absolute;
font-size: 30px;
font-weight: bold;
cursor: pointer;
z-index: 1;
justify-content: right;
border-radius:50%;
top: 45%;
-ms-transform: translateY(-50%);
transform: translateY(-50%);
`;

const RelatedProductCarousel = ({ productData, productStyle,  cardClickHandler, average}) => {
  const [carouselStartIndex, setcarouselStartIndex] = useState(0);

  const prevButton = () => {
    if (carouselStartIndex > 0) {
      setcarouselStartIndex(carouselStartIndex - 1);
    }
  }
  const nextButton = () => {
    if(carouselStartIndex < productData.length - 1){
      setcarouselStartIndex(carouselStartIndex + 1);
    }

  }

  const productDataFromStart = productData.slice(carouselStartIndex)
  const productStyleFromStart = productStyle.slice(carouselStartIndex)


  return (
    <CarouselDiv >
      <div className="carousel_actions">
        <PrevButton id="carousel_button--prev" onClick={prevButton}>˂</PrevButton>
      </div>
      <ProductCards>
        { productDataFromStart.map((product, key) => (
            <ProductCard
                clickHandler={cardClickHandler}
                key={product.id}
                id={product.id}
                category={product.category}
                name={product.name}
                price={product.default_price}
                style={get(productStyleFromStart, key)}
                average={average}
            />
        ))}
      </ProductCards>
      <div>
        <NextButton id="carousel_button--next" onClick={nextButton}>˃</NextButton>
      </div>
    </CarouselDiv>
  )
}

export default RelatedProductCarousel;