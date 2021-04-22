import React, { useState } from 'react';
import styled from 'styled-components';
import _ from 'underscore';

const SlideDiv = styled.img`
  border: 5px solid blue;
  position:relative;
  min-width:100%;
  height:100%;
  transition: 0.9s;
  overflow: hidden;
`;


function SliderContent( {slide, imgKey, currentIndex} ) {
  return (
    <SlideDiv src={slide[imgKey]} style={{ transform: `translateX(${currentIndex}%)` }} />
  );
}

export default SliderContent;
