import React, { useState, useEffect } from 'react';
import config from '../../../../config.js';
import axios from 'axios';

const RelatedProducts = ({ productID }) => {

  const [products, setRelatedProducts] = useState([]);

  useEffect(() => {
    axios.defaults.headers.common['Authorization'] = config.Autherization;
    axios.get('https://app-hrsei-api.herokuapp.com/api/fec2/hr-sfo/products/', {headers: config})
      .then((relatedProducts) => {
        console.log('reaching this');
        console.log(relatedProducts);
      })
      .catch((err) => {
        console.log(err.response, 'error in the get req')
      })

    }, [products])


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
