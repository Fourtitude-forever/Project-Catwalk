import React, { useState } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import _ from 'underscore';

const SlideDiv = styled.img`
  border: 5px solid blue;
  position:relative;
  min-width: 100%;
  height: 100%;
  transition: 0.5s;
  overflow: hidden;
  box-sizing: border-box;
  object-fit: fill;
`;

function SliderContent({ photo, currentIndex }) {
  return (
    <SlideDiv src={photo} style={{ transform: `translateX(${currentIndex}%)` }} />
  );
}

SliderContent.propTypes = {
  photo: PropTypes.string.isRequired,
  currentIndex: PropTypes.number.isRequired,
};


export default SliderContent;
