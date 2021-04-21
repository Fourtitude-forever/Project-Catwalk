import React, { useState, useEffect } from 'react';
import axios from 'axios';

import Reviews from './Reviews.jsx';
import config from '../../../../config.js';

const ReviewsList = ({ productID }) => {
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [reviewsPerPage] = useState(2);

  useEffect(() => {
    // const fetchPosts = async () => {
    //   setLoading(true);
    //   const res = await axios.get('https://jsonplaceholder.typicode.com/posts');
    //   setReviews(res.data);
    //   console.log(res.data);
    //   setLoading(false);
    // };
    // fetchPosts();
    setLoading(true);
    axios('https://app-hrsei-api.herokuapp.com/api/fec2/hr-sfo/reviews/', {
      headers: config,
      params: { product_id: productID },
    })
      .then((list) => {
        setReviews(list.data.results);

        setLoading(false);
      })
      .catch((err) => {
        throw err;
      });
  }, []);

  // Get current reviews
  const indexOfLastReview = currentPage * reviewsPerPage;
  const indexOfFirstReview = indexOfLastReview - reviewsPerPage;
  const currentReviews = reviews.slice(indexOfFirstReview, indexOfLastReview);

  return (
    <div>
      <h1>Ratings and Reviews</h1>
      <Reviews reviews={currentReviews} loading={loading} />
      <button type="button">More Reviews</button>
      <button type="button">Add A Review +</button>
    </div>
  );
};

export default ReviewsList;
