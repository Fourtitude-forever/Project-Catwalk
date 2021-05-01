import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import StarRating from './StarRating.jsx';
import ReviewsList from './ReviewsList.jsx';
import { SectionBG2, Headers2 } from '../../css/sharedcss.jsx';

const HelpfulDiv = styled.div`
display: flex;
padding-right: 20%;
`;

const Top = styled.h3`
font-size: 25px;
`;

const RatingSpan = styled.span`
  font-size: 1.4rem;
  font-weight: 600;
  padding-right: 5px;
  line-height: 1.8rem;
  font-family: Helvetica, Arial;
`;

function RatingsAndReviews({ productID, average }) {
  return (
    <SectionBG2>
      <Headers2>Ratings and Reviews</Headers2>
      <HelpfulDiv>
        <RatingSpan>{average}</RatingSpan>
        <StarRating stars={average} />
      </HelpfulDiv>
      <ReviewsList productID={productID} />
    </SectionBG2>
  );
}

RatingsAndReviews.propTypes = {
  productID: PropTypes.number.isRequired,
  average: PropTypes.number.isRequired,
};

export default RatingsAndReviews;
