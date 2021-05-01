import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Img = styled.input`
  border: 1px solid grey;
  position: absolute;
  left: 20px;
  width: 70px;
  height: 60px;
  //overflow: hidden;
  object-fit: cover;
  &:hover {
    box-shadow: 0 0 4px 3px rgba(0, 140, 186, 0.5);
  }
`;

function Thumbnails({ photo, id, onThumbClick }) {
  const topVal = {
    top: `${(id + 1) * 60}px`,
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
