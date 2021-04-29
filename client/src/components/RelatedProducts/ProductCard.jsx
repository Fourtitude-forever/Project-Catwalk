import React from 'react';
import styled from 'styled-components';
import { get } from 'lodash';
import StarRating from '../RatingsAndReviews/StarRating.jsx';

const ProductCardDiv = styled.div`
  border: 3px solid black;
  border-radius: 10px;
  width: 210px;
  height: 300px;
  display: flex;
  flex-direction: column;
  justify-content: normal;
  align-items: center;
  margin:10px;
  box-shadow: 2px 10px 12px rgba(0,0,0,0.5);
  box-sizing: border-box;
  cursor: pointer;
  transition: 0.5s;
`;

const ProductCategoryDiv = styled.div`
  //border: 3px solid blue;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 3px;
`;

const ThumbnailDiv = styled.div`
  //border: 3px solid red;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Details_Div = styled.div`
  //border: 3px solid teal;
  display: flex;
  flex-direction: column;
  align-items: baseline;
  align-self: stretch;
  padding-left: 3px;
`;

const ProductName_Div = styled.div`
  //border: 3px solid purple;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 5px;
`;

const ProductPrice_Div = styled.div`
  //border: 3px solid yellow;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Category = styled.span`
  font-size: 16px;
`;

const Price = styled.span`
  font-size: 14px;
`;

const ProductThumbnail = styled.img`
  display: flex;
  flex-direction: column;
  align-items: center;
  object-fit: cover;
  width: 200px;
  height: 200px;
`;

const Name = styled.span`
  font-weight: bold;
  font-size: 16px;
`;

const StarButton = styled.button`
  border: 0px;
  display: flex;
`;

const Rating_Div = styled.div`
  padding-top: 3px;
`;

const ProductCard = ({ id, category, name, price, style = {}, clickHandler, average}) => {

  const getPicture = (results = []) => {
    for (var result of results ) {
      if (result.['default?'] === true) {
        return get(result, 'photos[0].thumbnail_url');
      }
    }

    return get(results, '[0].photos[0].thumbnail_url');
  };

  return(
    <ProductCardDiv onClick={() => {
      console.log('you clicked')
      clickHandler(id);
    }}>
      <ThumbnailDiv>
        <ProductThumbnail src={getPicture(style.results)} />
      </ThumbnailDiv>
      <Details_Div>
        <ProductCategoryDiv>
          <Category>{category}</Category>
        </ProductCategoryDiv>
        <ProductName_Div>
          <Name>{name}</Name>
        </ProductName_Div>
        <ProductPrice_Div>
          <Price>{price}</Price>
        </ProductPrice_Div>
        {/* <Rating_Div>☆☆☆☆☆</Rating_Div> */}
        <StarRating stars={average} />
      </Details_Div>
    </ProductCardDiv>
  )
}

export default ProductCard;