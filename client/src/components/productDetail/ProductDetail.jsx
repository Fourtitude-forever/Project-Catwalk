import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import axios from 'axios';
import config from '../../../../config.js';
import Slider from './Top/ImageSlider/Slider.jsx';
import ProductOverview from './Top/ProductOverview/ProductOverview.jsx';
import ProductDescription from './Down/ProductDescription.jsx';

const ProductDetailDiv = styled.div`
  position: relative;
  width:100%;
  height:90vh;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Top = styled.div`
  position: relative;
  width: 80%;
  height:100%;
  display:flex;
  margin:1%;
`;

const Down = styled.div`
  position: relative;
  width: 50%;
  height:20%;
  display:flex;
  margin:0.5%;
`;

function ProductDetail({ productID, onStarChange, average }) {
  const [isloading, setLoading] = useState(false);
  const [styles, setStyles] = useState([]);
  const [styleId, setStyleId] = useState();
  const [selectedStyle, setSelectedStyle] = useState([]);

  useEffect(() => {
    setLoading(true);
    axios(`https://app-hrsei-api.herokuapp.com/api/fec2/hr-sfo/products/${productID}/styles`, { headers: config })
      .then((product) => {
        setStyles(product.data.results);
        setStyleId(product.data.results[0].style_id);
        setSelectedStyle(product.data.results.filter((style) => (style.style_id === styleId)));
      })
      .catch((err) => {
        throw err;
      });
  }, [productID]);

  useEffect(() => {
    setSelectedStyle(styles.filter((style) => style.style_id === styleId));
  }, [styleId]);

  function onStyleChange(id) {
    setStyleId(id);
  }

  return (
    <ProductDetailDiv>
      <Top>
        <Slider
          selectedStyle={selectedStyle}
          styles={styles}
          styleId={styleId}
        />
        <ProductOverview
          selectedStyle={selectedStyle}
          styles={styles}
          styleId={styleId}
          productID={productID}
          onStyleChange={onStyleChange}
          onStarChange={onStarChange}
          average={average}
        />
      </Top>
      <Down>
        <ProductDescription productID={productID} />
      </Down>
    </ProductDetailDiv>
  );
}

ProductDetail.propTypes = {
  productID: PropTypes.number.isRequired,
};

export default ProductDetail;
