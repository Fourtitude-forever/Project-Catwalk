import React, { useState, useEffect } from 'react';
import config from '../../../../config.js';
import axios from 'axios';

const RelatedProducts = ({ productID }) => {

  const [relatedProducts, setRelatedProducts] = useState([]);
  const [productData, setProductData] = useState([]);




  useEffect(() => {
    axios.defaults.headers.common['Authorization'] = config.Autherization;
    axios.get(`https://app-hrsei-api.herokuapp.com/api/fec2/hr-sfo/products/${productID}/related`, {headers: config})
      .then((products) => {
        // console.log('reaching this');
        // console.log(products)
        // console.log(products.data);
        setRelatedProducts(products.data);
        //console.log(relatedProducts, 'after state set')
      })
      // .then(()=>{
      //   console.log(relatedProducts);
      // })
      .catch((err) => {
        console.log(err.response, 'err in req1')
      })
    }, [])

    const getHelper = (relatedProduct) => {
      axios.get(`https://app-hrsei-api.herokuapp.com/api/fec2/hr-sfo/products/${relatedProduct}`, {headers: config})
        .then((product) => {
          //console.log(product.data);
          // const data = [product.data];
          // console.log(productData, 'this is the state')
          // const previousData = productData;
          // setProductData({...previousData, data})
          productData.push(product.data)
          //console.log(productData);
        })
        .catch(() =>{
          console.log(response.err, 'err at req2')
        })
    }

    useEffect(() => {
      console.log(relatedProducts)
      relatedProducts.map((product) => {
        getHelper(product)
      })
    }, [relatedProducts])

  return (

    <div className="RelatedProducts">
      <h1>Related Products</h1>
      <div className="carousel">
        <div className="productCard">
          <div className="item_1">
              Test Card
          </div>
        </div>
        <div className="carousel_actions">
          <button id="carousel_button--prev" aria-label="Previous_cards">˂</button>
          <button id="carousel_button--next" aria-label="Next_cards">˃</button>
        </div>
      </div>
    </div>
  )

}

export default RelatedProducts;
