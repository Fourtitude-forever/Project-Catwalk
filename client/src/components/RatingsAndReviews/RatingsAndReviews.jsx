import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import axios from 'axios';

import StarRating from './StarRating.jsx';
import ReviewsList from './ReviewsList.jsx';
import { SectionBG1, Headers2 } from '../../css/sharedcss.jsx';
import config from '../../../../config';

const HelpfulDiv = styled.div`

display: flex;
padding-right: 20%;
`;

const Top = styled.h1`
font-size: 25px;
`;

const RatingSpan = styled.span`
  font-size: 1.8rem;
  font-weight: 600;
  padding-right: 5px;
  line-height: 1.8rem;
  font-family: Helvetica, Arial;
`;

function RatingsAndReviews({ productID }) {
  // Declare a new state variable, which we'll call "count"
  const [avgRating, setAvgRating] = useState(0);

  useEffect(() => {
    const sendRequest = async () => {
      await axios({
        method: 'GET',
        url: 'https://app-hrsei-api.herokuapp.com/api/fec2/hr-sfo/reviews/',
        headers: config,
        params: { product_id: productID },
      })
        .then((resp) => {
          const { count } = resp.data;
          let tempRating = 0;
          resp.data.results.map((review) => {
            tempRating += (review.rating);
          });
          tempRating /= count;
          setAvgRating(tempRating);
        });
    };
    sendRequest();
  }, []);

  return (
    <SectionBG1>
      <HelpfulDiv>
        <RatingSpan>{avgRating}</RatingSpan>
        <StarRating stars={avgRating} />
      </HelpfulDiv>
      <span> </span>
      <Top>Average Rating</Top>
      <Headers2>Ratings and Reviews</Headers2>
      <ReviewsList productID={productID} />
    </SectionBG1>
  );
}
export default RatingsAndReviews;
