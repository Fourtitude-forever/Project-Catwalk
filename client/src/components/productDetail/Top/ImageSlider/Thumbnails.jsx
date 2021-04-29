import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Img = styled.input`
  border: 1px solid grey;
  position: absolute;
  left: 30px;
  width: 60px;
  height: 60px;
  overflow: hidden;
  object-fit: cover;
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
