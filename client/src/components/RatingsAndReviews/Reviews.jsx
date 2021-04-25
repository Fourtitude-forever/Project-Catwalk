import React from 'react';
import styled from 'styled-components';
import * as moment from 'moment';

import StarRating from './starRating.jsx';

const LineBreak = styled.div`
width: 60%;
border-bottom: solid 1px black;
margin-bottom: 15px;
margin-top: 10px;
`;

const ReviewHeading = styled.p`
  font-size: 17px;
  font-weight: bold;
  margin-bottom: 0;
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
            <ReviewHeading>
              {review.reviewer_name.charAt(0).toUpperCase()
              + review.reviewer_name.substr(1).toLowerCase()}
              ,
              {'  '}
              {'  '}
              {moment(review.date).format('MMMM DD, YYYY')}
            </ReviewHeading>
            <br />
            <span>
              {review.summary}
            </span>
            <br />
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
