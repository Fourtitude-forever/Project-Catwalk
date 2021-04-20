import React, { useState } from 'react';
import API_KEY from '../../../../config.js';

function RelatedProducts() {

  const [products, setProducts] = useState([]);

  //useEffect()

  return (
    <div className="RelatedProducts">
      <h1>Related Products</h1>
      <div className="carousel">
        <div className="productCard">
          <div className="item_1">
              sampleItem
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
