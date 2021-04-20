import React from 'react';
import StarRating from './StarRating.jsx';
import ReviewsList from './ReviewsList.jsx';

function RatingsAndReviews() {
  // Declare a new state variable, which we'll call "count"

  return (
    <div>
      <StarRating stars={3.6} />
      <ReviewsList />
    </div>
  );
}
export default RatingsAndReviews;
