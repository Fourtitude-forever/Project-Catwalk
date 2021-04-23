import React from 'react';

const ProductCard = ({ id, category, name, price }) => {
  return(
    <div className="productCard" id={id}>
      <div className="productCategory">
        <span>{category}</span>
      </div>
      <div className="productName">
        <span>{name}</span>
      </div>
      <div className="productPrice">
        <span>{price}</span>
      </div>
    </div>
  )
}

export default ProductCard;