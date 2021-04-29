import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import SliderContent from './SliderContent.jsx';
import Thumbnails from './Thumbnails.jsx';

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

function Slider({ selectedStyle }) {
  const [x, setX] = useState(0);
  const [isloading, setLoading] = useState(false);

  const goLeft = () => {
    if (x === 0) {
      setX(0);
    } else {
      setX(x + 100);
    }
  };

  const goRight = () => {
    if (x === -100 * (selectedStyle[0].photos.length - 1)) {
      setX(0);
    } else {
      setX(x - 100);
    }
  };

  function onThumbClick(index) {
    setX(index);
  }

  let loadingIcon;
  if (isloading) {
    loadingIcon = <p>Please wait...loading</p>;
  }

  return (

    <SliderDiv>
      {
        selectedStyle[0] ? selectedStyle[0].photos.map((photo, i) => (
          <SliderContent
            photo={photo}
            currentIndex={x}
            key={i}
          />
        )) : loadingIcon

      }
      <LeftButton onClick={goLeft}>ᐸ</LeftButton>
      <RightButton onClick={goRight}>ᐳ</RightButton>

      {
        selectedStyle[0] ? selectedStyle[0].photos.map((photo, i) => (
          <Thumbnails
            photo={photo}
            currentIndex={x}
            key={i}
            id={i}
            onThumbClick={onThumbClick}
          />
        )) : loadingIcon
      }

    </SliderDiv>

  );
}

Slider.propTypes = {
  selectedStyle: PropTypes.array.isRequired,
};

export default Slider;
