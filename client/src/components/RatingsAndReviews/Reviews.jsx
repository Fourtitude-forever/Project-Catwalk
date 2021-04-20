import React from 'react';

const Reviews = ({ reviews, loading }) => {
  if (loading) {
    return <h2>Loading...</h2>;
  }

  return (
    <div>
      <ol className="reviews">
        {reviews.map((post) => (
          <li key={post.id}>
            {post.title}
          </li>
        ))}
      </ol>
    </div>
  );
};

export default Reviews;
