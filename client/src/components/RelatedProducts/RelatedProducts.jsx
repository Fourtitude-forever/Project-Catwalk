import React, { useState, useEffect } from 'react';
import config from '../../../../config.js';
import axios from 'axios';
import ProductCard from './ProductCard.jsx';
import RelatedProductCarousel from './RelatedProductCarousel.jsx';
import styled from 'styled-components';
import { get } from 'lodash';
import MyOutfit from './MyOutfit.jsx';
import {SectionBG1, Headers2} from '../../css/sharedcss.jsx';


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

const RelatedProducts = ({ productID, clickHandler, average, starStyle, deleteStyle, addStarStyle }) => {

  const [relatedProducts, setRelatedProducts] = useState([]);
  const [productData, setProductData] = useState([]);
  const [productStyle, setProductStyle] = useState([]);


  useEffect(() => {
    axios.get(`https://app-hrsei-api.herokuapp.com/api/fec2/hr-sfo/products/${productID}/related`, {headers: config})
      .then((products) => {
        setRelatedProducts(products.data);
      })
      .catch((err) => {
        console.log(err.response, 'err in req1')
      })
    }, [productID])

  useEffect(() => {
    if(relatedProducts.length > 0) {
      getProductDataAsync();
      getProductStyleAsync();
    }
  }, [relatedProducts])

  const getProductDataAsync = async () =>{
    const tempData =[];
    for (var relatedProductId of relatedProducts) {
      const data = await getProductData(relatedProductId);
      tempData.push(data);
    }
    setProductData(tempData);
  }

  const getProductData = (relatedProduct) => {
    return axios.get(`https://app-hrsei-api.herokuapp.com/api/fec2/hr-sfo/products/${relatedProduct}`, {headers: config})
      .then((product) => {
        return product.data;
      })
      .catch(() =>{
        console.log(response.err, 'err at req2')
      })
  }

  const getProductStyleAsync = async () => {
    var tempData = [];
    for (var relatedProductStylesId of relatedProducts) {
      const data = await getProductStyle(relatedProductStylesId);
      tempData.push(data);
    }
    setProductStyle(tempData);
  }

  const getProductStyle = (relatedProduct) => {
    return axios.get(`https://app-hrsei-api.herokuapp.com/api/fec2/hr-sfo/products/${relatedProduct}/styles`, {headers: config})
      .then((product) => {
        return product.data
      })
      .catch(() =>{
        console.log(response.err, 'err at req3')
      })
  }

  return (
    <SectionBG1>
      <Headers2>Related Products</Headers2>
      <RelatedProductCarousel
        average={average}
        productData={productData}
        productStyle={productStyle}
        cardClickHandler={clickHandler}
        addStar={addStarStyle}
      />
      <MyOutfit
        productID={productID}
        average={average}
        productData={productData}
        productStyle={productStyle}
        cardClickHandler={clickHandler}
        starStyle={starStyle}
        deleteStyle={deleteStyle}
      />
    </SectionBG1>
  )
}

export default RelatedProducts;
