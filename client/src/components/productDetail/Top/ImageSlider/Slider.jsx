import React, { useState } from 'react';
import styled from 'styled-components';
import SliderContent from './SliderContent.jsx';
import Thumbnails from './Thumbnails.jsx';
import _ from 'underscore';

const SliderDiv = styled.div`
  border: 5px solid purple;
  position: relative;
  width:70%;
  height:100%;
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


function Slider({ images }) {
  // dummy array
  const sliderArr = images;

  const [x, setX] = useState(0);

  const goLeft = () => {
    if (x === 0) {
      setX(0);
    } else {
      setX(x + 100);
    }
  };

  const goRight = () => {
    if (x === -100 * (sliderArr.length - 1)) {
      setX(0);
    } else {
      setX(x - 100);
    }
  };

  return (
    <SliderDiv>
      {
        images.map((item, index) => {
          const imgKey = `img${index + 1}`;
          return (<SliderContent slide={item} imgKey={imgKey} key={index} currentIndex={x} />);
        })
      }
      <LeftButton onClick={goLeft}>Left</LeftButton>
      <RightButton onClick={goRight}>Right</RightButton>
      <Thumbnails images={images} currentIndex={x} />
    </SliderDiv>

  );
}

export default Slider;


// _.map(images, (item, index) => {
//   const imgKey = `img${index + 1}`;
//   return <SliderContent slide={item} imgKey={imgKey} key={index} style={{ transform: `translateX(${x}%)` }} />;
// })