import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const SlideDiv = styled.img`
  //border: 5px solid blue;
  position:relative;
  alt: product image;
  min-width: 100%;
  height: 100%;
  transition: 0.5s;
  overflow: hidden;
  box-sizing: border-box;
  object-fit: contain;
  visibility: visible;
  background-color: #f6f5f5;
`;

function SliderContent({ photo, currentIndex }) {
  return (
    <SlideDiv src={photo.url} style={{ transform: `translateX(${currentIndex}%)` }} />
  );
}

SliderContent.propTypes = {
  photo: PropTypes.object.isRequired,
  currentIndex: PropTypes.number.isRequired,
};

export default SliderContent;
