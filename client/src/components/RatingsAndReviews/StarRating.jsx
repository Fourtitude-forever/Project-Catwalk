import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import IconStar from './IconStar.jsx';

const S = {};

S.WrapperDiv = styled.div`
  display: flex;
  align-items: center;
`;

S.BackStarsDiv = styled.div`
  display: flex;
  position: relative;
  color: #d3d3d3;
`;

S.FrontDiv = styled.div`
  display: flex;
  position: absolute;
  top: 0;
  overflow: hidden;
  width: ${(props) => props.rating};
  color: #ffbc0b;
`;

function StarRating(props) {
  let rating = 0;

  /* This is to round the rating to closest .5 or .0 */
  if (props.stars) {
    rating = `${(((Math.round((props.stars * 10) / 5) * 5) / 10) * 20).toString()}%`;
  }

  return (
    <>
      <S.WrapperDiv>
        <S.BackStarsDiv>
          <IconStar />
          <IconStar />
          <IconStar />
          <IconStar />
          <IconStar />
          <S.FrontDiv rating={rating}>
            <IconStar />
            <IconStar />
            <IconStar />
            <IconStar />
            <IconStar />
          </S.FrontDiv>
        </S.BackStarsDiv>
      </S.WrapperDiv>
    </>
  );
}

StarRating.propTypes = {
  stars: PropTypes.number.isRequired,
};

export default StarRating;
