import React from 'react';
import styled from 'styled-components';
import { get } from 'lodash';

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
`;

const ProductCategoryDiv = styled.div`
  border: 3px solid blue;
  display: flex;
  flex-direction: column;
  align-items: center;

`;

const ThumbnailDiv = styled.div`
  border: 3px solid red;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Details_Div = styled.div`
  border: 3px solid teal;
  display: flex;
  flex-direction: column;
  align-items: baseline;
  align-self: stretch;
`;

const ProductName_Div = styled.div`
  border: 3px solid purple;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ProductPrice_Div = styled.div`
  border: 3px solid yellow;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Category = styled.span`
  font-size: 12px;
`;

const Price = styled.span`
  font-size: 12px;
`;

const ProductThumbnail = styled.img`
  display: flex;
  flex-direction: column;
  align-items: center;
  object-fit: cover;
  width: 200px;
  height: 200px;
`;

const StarButton = styled.button`
  border: 0px;
  display: flex;
`;

const ProductCard = ({ id, category, name, price, style = {}}) => {

  const getPicture = (results = []) => {
    for (var result of results ) {
      if (result.['default?'] === true) {
        return get(result, 'photos[0].thumbnail_url');
      }
    }

    return get(results, '[0].photos[0].thumbnail_url');
  };

  return(
    <ProductCardDiv>
      <ThumbnailDiv>
        <ProductThumbnail src={getPicture(style.results)} />
      </ThumbnailDiv>
      <Details_Div>
        <ProductCategoryDiv>
          <Category>{category}</Category>
        </ProductCategoryDiv>
        <ProductName_Div>
          <span>{name}</span>
        </ProductName_Div>
        <ProductPrice_Div>
          <Price>{price}</Price>
        </ProductPrice_Div>
      </Details_Div>
    </ProductCardDiv>
  )
}

export default ProductCard;