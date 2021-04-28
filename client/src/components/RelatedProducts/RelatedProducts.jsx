import React, { useState, useEffect } from 'react';
import config from '../../../../config.js';
import axios from 'axios';
import ProductCard from './ProductCard.jsx';
import RelatedProductCarousel from './RelatedProductCarousel.jsx';
import styled from 'styled-components';
import { get } from 'lodash';

const RelatedProducts = ({ productID, clickHandler }) => {

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
    <div className="RelatedProducts">
      <h1>Related Products</h1>
      <RelatedProductCarousel productData={productData} productStyle={productStyle} cardClickHandler={clickHandler}/>
    </div>
  )
}

export default RelatedProducts;
