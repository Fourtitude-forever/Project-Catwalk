import React from 'react';
import styled from 'styled-components';
import * as moment from 'moment';

const StyledP = styled.p`
border-bottom: 2px solid black;
font-family: 'trebuchet ms'
`;

const StyledH3 = styled.h3`
font-family: 'trebuchet ms'
`;

const RatingsAndDateContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Reviews = ({ reviews, loading }) => {
  if (loading) {
    return <h2>Loading...</h2>;
  }
  // console.log(reviews);
  return (
    <div>
      <div>
        {reviews.map((review) => (
          <div key={review.review_id}>
            <RatingsAndDateContainer>
              <span>{review.rating}</span>
              <span>
                {review.reviewer_name.charAt(0).toUpperCase()
              + review.reviewer_name.substr(1).toLowerCase()}
                ,
                {' '}
                {' '}
                {moment(review.date).format('MMMM DD, YYYY')}
              </span>
            </RatingsAndDateContainer>
            <span><StyledH3>{review.summary}</StyledH3></span>
            <span><StyledP>{review.body}</StyledP></span>
          </div>
        ))}
      </div>
    </div>
  );
};
export default Reviews;
