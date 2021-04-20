import React from 'react';

const Reviews = ({ reviews, loading }) => {
  if (loading) {
    return <h2>Loading...</h2>;
  }
  console.log(reviews);
  return (
    <div>
      <ol className="reviews">
        {reviews.map((review) => (
          <li key={review.id}>
            {review.title}
            {review.body}
          </li>
        ))}
      </ol>
    </div>
  );
};

export default Reviews;
