import React, { useState, useEffect } from 'react';
import ProductCard from './ProductCard.jsx';
import styled from 'styled-components';
import { get } from 'lodash';


const RelatedProductCarousel = ({ productData, productStyle }) => {
  const [carouselIndex, setcarouselIndex] = useState(0);

  const CarouselDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border: 3px solid orange;
  margin: 20px;
  padding: 10px;
  height: 350px;
  width: 100%;
  overflow-x: hidden;
`;

  return (
    <CarouselDiv >
      <div className="carousel_actions">
        <button id="carousel_button--prev" aria-label="Previous_cards">˂</button>
      </div>
      { productData.map((product, key) => (
          <ProductCard
              key={product.id}
              category={product.category}
              name={product.name}
              price={product.default_price}
              style={get(productStyle, key)}
          />
      ))}
      <div className="carousel_actions">
        <button id="carousel_button--next" aria-label="Next_cards">˃</button>
      </div>
    </CarouselDiv>
  )
}

export default RelatedProductCarousel;