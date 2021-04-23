import React from 'react';
import styled from 'styled-components';
import * as moment from 'moment';

import { ThreadHeading } from '../../css/sharedcss.jsx';
import StarRating from './starRating.jsx';

const LineBreak = styled.div`
width: 60%;
border-bottom: solid 1px black;
margin-bottom: 10px;
margin-top: 10px;
`;

const Reviews = ({ reviews, loading }) => {
  if (loading) {
    return <h2>Loading...</h2>;
  }

  return (
    <div>
      <div>
        {reviews.map((review) => (
          <div key={review.review_id}>
            <StarRating stars={review.rating} />
            <ThreadHeading>
              {review.reviewer_name.charAt(0).toUpperCase()
              + review.reviewer_name.substr(1).toLowerCase()}
              ,
              {'  '}
              {'  '}
              {moment(review.date).format('MMMM DD, YYYY')}
            </ThreadHeading>
            <br />
            <br />
            <span>
              {review.summary}
            </span>
            <br />
            <span>
              {review.body}
            </span>
            <LineBreak />
          </div>
        ))}
      </div>
    </div>
  );
};
export default Reviews;
