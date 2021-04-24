import React from 'react';
import styled from 'styled-components';

import StarRating from './StarRating.jsx';
import ReviewsList from './ReviewsList.jsx';
import { SectionBG1, Headers2 } from '../../css/sharedcss.jsx';

const Top = styled.h1`
font-size: 25px;
`;

function RatingsAndReviews({ productID }) {
  // Declare a new state variable, which we'll call "count"

  return (
    <SectionBG1>
      <StarRating stars={3.6} />
      <Top>Average Rating</Top>
      <Headers2>Ratings and Reviews</Headers2>
      <ReviewsList productID={productID} />
    </SectionBG1>
  );
}
export default RatingsAndReviews;
