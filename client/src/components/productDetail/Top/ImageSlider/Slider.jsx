import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import SliderContent from './SliderContent.jsx';
import Thumbnails from './Thumbnails.jsx';

const SliderDiv = styled.div`
  //border: 5px solid #1687a7;
  position:absolute;
  ${(props) => {
    if (!props.isExpanded) {
      return `
        width:65%;
        transition: all 0.5s;
        //transform: translateY(4px);
      `;
    } return `
        width:100%;
        transition: all 0.5s;
        //transform: translateY(4px);
    `;
  }}
  height: 100%;
  box-sizing: border-box;
  display: flex;
  align-items:center;
  overflow: hidden;
  z-index: 10;
  background-color: #f6f5f5;
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
  cursor: pointer;
  ${(props) => {
    if (!props.isExpanded) {
      return `
        visibility: translateY(2px);
      `;
    } return `
    visibility: translateY(2px);
    `;
  }}
`;

const RightButton = styled.button`
  position:absolute;
  cursor: pointer;
  border: none;
  top:10%;
  right: 2%;
  width: 10%;
  height: 80%;
  background: none;
`;

const DownButton = styled.button`
  position:absolute;
  cursor: pointer;
  border: none;
  top:80%;
  left: 5%;
  // width: 10%;
  // height: 80%;
  background: none;
`;

const UpButton = styled.button`
  position:absolute;
  cursor: pointer;
  border: none;
  top:15%;
  left: 5%;
  // width: 10%;
  // height: 80%;
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
  //box-shadow: 7px 6px 28px 1px rgba(0, 0, 0, 0.24);
  transform: scale(0.98);
`;

const IconStyle = styled.i`
  &:hover {
    text-shadow: 2px 4px 6px grey;
    size: 2px;
    ${(props) => {
    if (!props.isExpanded) {
      return `
        transform: translateY(2px);
      `;
    } return `
        transform: translateY(2px);
    `;
  }}
}
`;

const ThumbNailsContainer = styled.div`
//border: 2px solid pink;
position: absolute;
left: 20px;
//top:10%;
width: 10%;
height: 55%;
box-sizing: border-box;
align-items: center;
overflow: hidden;
`;

function Slider({ selectedStyle }) {
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);
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

  const goDown = () => {
    if (y === -150 * (selectedStyle[0].photos.length - 1)) {
      setY(0);
    } else {
      setY(y - 150);
    }
  };

  const goUp = () => {
    if (y === 0) {
      setY(0);
    } else {
      setY(y + 150);
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
      <DownButton onClick={goDown}>ᐯ</DownButton>
      <UpButton onClick={goUp}>ᐱ</UpButton>
      <ThumbNailsContainer>
        {
        selectedStyle[0] ? selectedStyle[0].photos.map((photo, i) => (
          <Thumbnails
            photo={photo}
            currentIndex={x}
            currentYIndex={y}
            key={i}
            id={i}
            onThumbClick={onThumbClick}
          />
        )) : loadingIcon
      }
      </ThumbNailsContainer>
    </SliderDiv>

  );
}

Slider.propTypes = {
  selectedStyle: PropTypes.array.isRequired,
};

export default Slider;
