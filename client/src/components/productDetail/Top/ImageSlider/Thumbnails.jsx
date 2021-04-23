import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const ThumbnailsDiv = styled.div`
  border: 1px solid grey;
  position: absolute;
  left: 10px;
  width:60px;
  height:60px;
  overflow:hidden;
`;

const Img1 = styled.img`
  top: 10px;
`;

const Img2 = styled.img`
  top: 80px;
`;

const Img3 = styled.img`
  top: 150px;
`;

const Img4 = styled.img`
  top: 230px;
`;

const Img5 = styled.img`
  top: 300px;
`;

function Thumbnails({ photo, currentIndex }) {
  return (
    <ThumbnailsDiv>
      <Img1 />
      <Img2 />
      <Img3 />
      <Img4 />
      <Img5 />
    </ThumbnailsDiv>
  );
}

Thumbnails.propTypes = {
  photo: PropTypes.string.isRequired,
  currentIndex: PropTypes.number.isRequired,
};
export default Thumbnails;
