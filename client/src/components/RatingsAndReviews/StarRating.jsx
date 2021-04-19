import React, { useState } from 'react';
import { FaStar } from 'react-icons/fa';

function StarRating() {
  // Declare a new state variable, which we'll call "count"
  const [rating, setRating] = useState(null);

  return (
    <div>
      {[...Array(5)].map((star, i) => {
        const ratingValue = i + 1;

        return (
          <span>
            <input
              type="radio"
              name="rating"
              value={ratingValue}
              onClick={() => (setRating(ratingValue))}
            />
            <FaStar className="star" color={ratingValue <= rating ? '#000000' : '#e4e5e9'} />
          </span>
        );
      })}
    </div>
  );
}

export default StarRating;
