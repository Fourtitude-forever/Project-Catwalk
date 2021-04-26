import React, { useState, useEffect } from 'react';
import ProductCard from './ProductCard.jsx';
import styled from 'styled-components';
import { get } from 'lodash';


const RelatedProductCarousel = ({ productData, productStyle,  cardClickHandler}) => {
  const [carouselIndex, setcarouselIndex] = useState(0);

  const onClickHandler = (productCard_id) => {

  };

  const CarouselDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border: 3px solid orange;
  margin: 20px;
  padding: 10px;
  height: 350px;
  width: 100%;
`;
const ProductCards = styled.div`
  display: flex;
  overflow-x: hidden;
  //box-shaddow:
`;
  return (
    <CarouselDiv >
      <div className="carousel_actions">
        <button id="carousel_button--prev" aria-label="Previous_cards">˂</button>
      </div>
      <ProductCards>
        { productData.map((product, key) => (
            <ProductCard
                clickHandler={cardClickHandler}
                key={product.id}
                id={product.id}
                category={product.category}
                name={product.name}
                price={product.default_price}
                style={get(productStyle, key)}
            />
        ))}
      </ProductCards>
      <div className="carousel_actions">
        <button id="carousel_button--next" aria-label="Next_cards">˃</button>
      </div>
    </CarouselDiv>
  )
}

export default RelatedProductCarousel;