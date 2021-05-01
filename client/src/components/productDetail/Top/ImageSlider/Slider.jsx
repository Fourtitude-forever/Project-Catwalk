import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import SliderContent from './SliderContent.jsx';
import Thumbnails from './Thumbnails.jsx';

const SliderDiv = styled.div`
  //border: 5px solid #1687a7;
  ${(props) => {
    if (!props.isExpanded) {
      return `
        position:relative;
        width:70%;
        transition: all 0.5s;
      `;
    } return `
        position:absolute;
        width:100%;
        transition: all 0.5s;
    `;
  }}
  //position: absolute;
  //width:70%;
  height: 100%;
  box-sizing: border-box;
  display: flex;
  align-items:center;
  overflow: hidden;
  z-index: 5;
`;

// position: ${(props) => (props.isExpanded ? 'relative' : 'absolute')};

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

const ExpandButton = styled.button`
  position:absolute;
  border: none;
  background-color: transparent;
  top:5%;
  right: 5%;
  width: 5%;
  height: 5%;
  cursor: pointer;
`;

const IconStyle = styled.i`
  &:hover {
    text-shadow: 2px 4px 6px orange;
}
`;

function Slider({ selectedStyle }) {
  const [x, setX] = useState(0);
  const [isloading, setLoading] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);

  const handleExpandCollaps = () => {
    if (isExpanded) {
      setIsExpanded(false);
    } else {
      setIsExpanded(true);
    }
  };

  const onExpandClick = (e) => {
    e.preventDefault();
    handleExpandCollaps();
    console.log(isExpanded);
  };

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

    <SliderDiv isExpanded={isExpanded}>
      {
        selectedStyle[0] ? selectedStyle[0].photos.map((photo, i) => (
          <SliderContent
            photo={photo}
            currentIndex={x}
            key={i}
          />
        )) : loadingIcon

      }
      <ExpandButton onClick={onExpandClick}><IconStyle className="fas fa-expand" /></ExpandButton>
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
