import React from 'react';
import styled from 'styled-components';

const Reviews = ({ reviews, loading }) => {
  if (loading) {
    return <h2>Loading...</h2>;
  }
  // console.log(reviews);
  return (
    <div>
      <div className="reviews">
        {reviews.map((review) => (
          <div key={review.id}>
            <span><StyledH>{review.title}</StyledH></span>
            <span><StyledP>{review.body}</StyledP></span>
          </div>
        ))}
      </div>
    </div>
  );
};

const StyledP = styled.p`
border-bottom: 2px solid black;
font-family: 'trebuchet ms'
`;

const StyledH = styled.h3`
font-family: 'trebuchet ms'
`;

export default Reviews;
