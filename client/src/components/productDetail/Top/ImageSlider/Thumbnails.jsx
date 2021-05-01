import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Img = styled.input`
  border: 1px solid grey;
  position: absolute;
  width: 80%;
  height: 20%;
  overflow: hidden;
  object-fit: cover;
  box-sizing: border-box;
  &:hover {
    box-shadow: 0px 0px 4px 2px #1687a7;
  };
  transition: 0.5s;
`;

function Thumbnails({ photo, id, onThumbClick, currentYIndex }) {
  const topVal = {
    top: `${(id) * 80}px`,
    transform: `translateY(${currentYIndex}%)`
  };

  return (

    <Img type="image" src={photo.thumbnail_url} style={topVal} onClick={() => onThumbClick(id * -100)} alt="thumbnail" />

  );
}

Thumbnails.propTypes = {
  photo: PropTypes.object.isRequired,
  id: PropTypes.number.isRequired,
  onThumbClick: PropTypes.func.isRequired,
};
export default Thumbnails;
