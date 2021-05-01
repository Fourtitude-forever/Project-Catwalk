import React, { useState, useEffect } from 'react';
import ProductCard from './ProductCard.jsx';
import styled from 'styled-components';
import { get } from 'lodash';

const CarouselDiv = styled.div`
display: flex;
justify-content: center;
align-items: center;
//border: 3px solid orange;
margin: 20px;
padding: 10px;
height: 350px;
width: 85%;
overflow: hidden;
position: relative;
`;

const ProductCards = styled.div`
display: flex;
width: 85%;
height: 350px;
margin: 200px auto;
overflow-x: auto;

`;

const PrevButton = styled.button`
position: absolute;
font-size: 60px;
font-weight: bold;
cursor: pointer;
z-index: 1;
background: none;
border: none;
`;

const NextButton = styled.button`
position: absolute;
font-size: 60px;
font-weight: bold;
cursor: pointer;
z-index: 1;
background: none;
border: none;
justify-content: right;
`;

const NextButton_Div = styled.div`
display: flex;
padding-right:40px;
`;


const RelatedProductCarousel = ({ productData, productStyle,  cardClickHandler, average, addStar}) => {
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
                addStar={addStar}
            />
        ))}
      </ProductCards>
      <NextButton_Div>
        <NextButton id="carousel_button--next" onClick={nextButton}>˃</NextButton>
      </NextButton_Div>
    </CarouselDiv>
  )
}

export default RelatedProductCarousel;