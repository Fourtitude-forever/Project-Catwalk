import React, { useState } from 'react';
import styled from 'styled-components';
import SliderContent from './SliderContent.jsx';


const SliderDiv = styled.div`
  border: 1px solid red;
  position: relative;
  width:70%;
  height:40vh;
  box-sizing: border-box;
  display: flex;
  align-items:center;
  overflow: hidden;
`;

const SlideDiv = styled.div`
  border: 1px solid blue;
  min-width:100%;
  height:100%;
  transition: 0.9s;
  overflow: hidden;
`;

const LeftButton = styled.button`
  position:absolute;
  top:10%;
  left: 0;
  transfor: translateY(-50%);
  width: 10%;
  height: 80%;
  background: none;

`;

const RightButton = styled.button`
  position:absolute;
  top:10%;
  right: 0;
  transfor: translateY(-50%);
  width: 10%;
  height: 80%;
  background: none;
`;


function Slider() {
  // dummy array
  const sliderArr = [
    SliderContent().props.children[0],
    SliderContent().props.children[1],
    SliderContent().props.children[2],
    SliderContent().props.children[3],
    SliderContent().props.children[4],
  ];

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
        sliderArr.map((item, index) => (
          <SlideDiv key={index} style={{ transform: `translateX(${x}%)` }}>
            {item}
          </SlideDiv>
        ))
      }
      <LeftButton onClick={goLeft}>Left</LeftButton>
      <RightButton onClick={goRight}>Right</RightButton>
    </SliderDiv>
  );
}

export default Slider;
