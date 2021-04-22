import React from 'react';
import styled from 'styled-components';

const Img1 = styled.img`
border: 1px solid grey;
  position: absolute;
  top: 10px;
  left: 10px;
  width:60px;
  height:60px;
  overflow:hidden;
`;

const Img2 = styled.img`
  border: 1px solid grey;
  position: absolute;
  top: 80px;
  left: 10px;
  width:60px;
  height:60px;
  overflow:hidden;
`;

const Img3 = styled.img`
  border: 1px solid grey;
  position: absolute;
  top: 150px;
  left: 10px;
  width:60px;
  height:60px;
  overflow:hidden;
`;

const Img4 = styled.img`
  border: 1px solid grey;
  position: absolute;
  top: 230px;
  left: 10px;
  width:60px;
  height:60px;
  overflow:hidden;
`;

const Img5 = styled.img`
  border: 1px solid grey;
  position: absolute;
  top: 300px;
  left: 10px;
  width:60px;
  height:60px;

  overflow:hidden;
`;

function Thumbnails({ images, currentIndex }) {
  console.log(images, currentIndex);

  return (
    <div>
      <Img1 src={images[0].img1} />
      <Img2 src={images[1].img2} />
      <Img3 src={images[2].img3} />
      <Img4 src={images[3].img4} />
      <Img5 src={images[4].img5} />
    </div>
  );
}

export default Thumbnails;
