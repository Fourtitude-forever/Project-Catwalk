import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { get } from 'lodash';
import StarRating from '../RatingsAndReviews/StarRating.jsx';

const MyOutfitCard_Div = styled.div`
  border: 3px solid grey;
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

const Thumbnail_Div = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow: hidden;
  position: relative;
`;

const Thumbnail = styled.img`
display: flex;
flex-direction: column;
align-items: center;
object-fit: cover;
width: 200px;
height: 200px;
`;

const Details_Div = styled.div`
  display: flex;
  flex-direction: column;
  align-items: baseline;
  align-self: stretch;
  padding-left: 3px;
`;

const ProductCategory_Div = styled.div``;

const Category = styled.div``;

const ProductName_Div = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 5px;
`;

const Name = styled.span`
font-weight: bold;
font-size: 16px;
`;

const ProductPrice_Div = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 5px;
  padding-bottom: 5px;
`;

const Price = styled.span`
font-size: 14px;
`;

const MyOutfitCard = ({ id, category, name, price, style, clickHandler, average}) => {

    return(
      <MyOutfitCard_Div onClick={() => {
        clickHandler(id);
      }}>
        <Thumbnail_Div>
          <Thumbnail src={style} />
        </Thumbnail_Div>
        <Details_Div>
          <ProductCategory_Div>
            <Category>{category}</Category>
          </ProductCategory_Div>
          <ProductName_Div>
            <Name>{name}</Name>
          </ProductName_Div>
          <ProductPrice_Div>
            <Price>{price}</Price>
          </ProductPrice_Div>
          <StarRating stars={average} />
        </Details_Div>
      </MyOutfitCard_Div>
    )
  }

export default MyOutfitCard;