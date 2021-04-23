import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import axios from 'axios';
import SliderContent from './SliderContent.jsx';
import Thumbnails from './Thumbnails.jsx';
import config from '../../../../../../config.js';

const SliderDiv = styled.div`
  border: 5px solid purple;
  position: relative;
  width:70%;
  height: 100%;
  box-sizing: border-box;
  display: flex;
  align-items:center;
  overflow: hidden;
`;

const LeftButton = styled.button`
  position:absolute;
  border: none;
  top:10%;
  left: 10%;
  width: 10%;
  height: 80%;
  background: none;

`;

const RightButton = styled.button`
  position:absolute;
  border: none;
  top:10%;
  right: 2%;
  width: 10%;
  height: 80%;
  background: none;
`;

function Slider({ productID }) {
  // dummy array
  // const sliderArr = images;

  const [isloading, setLoading] = useState();
  const [products, setProducts] = useState([]);
  const [x, setX] = useState(0);

  useEffect(() => {
    setLoading(true);
    axios(`https://app-hrsei-api.herokuapp.com/api/fec2/hr-sfo/products/${productID}/styles`, { headers: config })
      .then((product) => {
        setProducts(product.data.results);
        setLoading(false);
      })
      .catch((err) => {
        throw err;
      });
  }, []);

  const goLeft = () => {
    if (x === 0) {
      setX(0);
    } else {
      setX(x + 100);
    }
  };

  const goRight = () => {
    if (x === -100 * (products.length - 1)) {
      setX(0);
    } else {
      setX(x - 100);
    }
  };

  return (
    <SliderDiv>
      {
        products.map((item) => {
          const styleId = 129643;
          if (item.style_id === styleId) {
            return item.photos.map((photo, i) => (
              <SliderContent
                photo={photo.url}
                currentIndex={x}
                key={i}
              />
            ));
          }
        })
      }
      <LeftButton onClick={goLeft}>Left</LeftButton>
      <RightButton onClick={goRight}>Right</RightButton>
      {/* <Thumbnails currentIndex={x} /> */}
    </SliderDiv>

  );
}

Slider.propTypes = {
  productID: PropTypes.number.isRequired,
};

export default Slider;
