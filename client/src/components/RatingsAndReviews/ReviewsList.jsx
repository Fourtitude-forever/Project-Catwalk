<<<<<<< HEAD
import React, { useState, useEffect } from 'react';
import axios from 'axios';

import Reviews from './Reviews.jsx';

const ReviewsList = () => {
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [reviewsPerPage] = useState(2);

  useEffect(() => {
    const fetchPosts = async () => {
      setLoading(true);
      const res = await axios.get('https://jsonplaceholder.typicode.com/posts');
      setReviews(res.data);
      setLoading(false);
    };

    fetchPosts();
  }, []);

  // Get current reviews
  const indexOfLastReview = currentPage * reviewsPerPage;
  const indexOfFirstReview = indexOfLastReview - reviewsPerPage;
  const currentReviews = reviews.slice(indexOfFirstReview, indexOfLastReview);

  return (
    <div className="container">
      <h1>Ratings and Reviews</h1>
      <Reviews reviews={currentReviews} loading={loading} />
      <button type="button">More Reviews</button>
      <button type="button">Add A Review +</button>
    </div>
  );
};

export default ReviewsList;
=======
import React from 'react';

function ReviewsList() {

  return (
    <div className='container'>
      <h1>Reviews</h1>
    </div>

  );
}
export default ReviewsList;
>>>>>>> 892d627013edf7a2cc944f4e349c5a40d4bb27af
