import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { get } from 'lodash';
import MyOutfitCard from './MyOutfitCard.jsx';
import {Headers2, Button} from '../../css/sharedcss.jsx';

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

const NextButton_Div = styled.div`
display: flex;
padding-right:40px;
`;

const MyOutfit = ({ productID, productData, productStyle,  cardClickHandler, average, starStyle, deleteStyle }) => {

  const [carouselStartIndex, setcarouselStartIndex] = useState(0);
  const [outfitStyleData, setoutfitStyleData] = useState([])

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

  const productDataFromStart = starStyle.slice(carouselStartIndex);
  const productStyleFromStart = productStyle.slice(carouselStartIndex);

  return (
    <div>
      <Headers2>My Outfit</Headers2>
      <CarouselDiv >
        <div className="carousel_actions">
          <PrevButton id="carousel_button--prev" onClick={prevButton}>˂</PrevButton>
        </div>
        <ProductCards>
          { productDataFromStart.map((product, key) => (
              <MyOutfitCard
                clickHandler={cardClickHandler}
                key={product[0].style_id}
                id={productID}
                category={product.category}
                name={product[0].name}
                price={product[0].original_price}
                style={product[0].photos[0].url}
                average={average}
              />
          ))}
        </ProductCards>
        <NextButton_Div>
          <NextButton id="carousel_button--next" onClick={nextButton}>˃</NextButton>
        </NextButton_Div>
      </CarouselDiv>
    </div>
  )
}

export default MyOutfit;