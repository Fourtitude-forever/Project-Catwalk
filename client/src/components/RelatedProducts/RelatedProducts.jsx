import React, { useState, useEffect } from 'react';
import config from '../../../../config.js';
import axios from 'axios';
import ProductCard from './ProductCard.jsx'

const RelatedProducts = ({ productID }) => {

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
    }, [])

    console.log('this is related producst', relatedProducts);

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

    console.log('this is product data', productData);

    const getProductStyleAsync = async () => {
      var tempData = [];
      for (var relatedProductStylesId of relatedProducts) {
        const data = await getProductStyle(relatedProductStylesId);
        tempData.push(data);
      }
      console.log(tempData, 'this is tempdata')
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

    console.log(productStyle)

    return (

    <div className="RelatedProducts">
      <h1>Related Products</h1>
      <div className="carousel">
         { productData.map((product) => (
          <ProductCard
              id={product.id}
              category={product.category}
              name={product.name}
              price={product.default_price}
          />
         ))}
        <div className="carousel_actions">
          <button id="carousel_button--prev" aria-label="Previous_cards">˂</button>
          <button id="carousel_button--next" aria-label="Next_cards">˃</button>
        </div>
      </div>
    </div>
  )

}

export default RelatedProducts;
