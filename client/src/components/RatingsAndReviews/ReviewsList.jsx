import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styled from 'styled-components';

import Reviews from './Reviews.jsx';
import config from '../../../../config';

const Button = styled.button`
  ${(props) => {
    if (props.reachedEnd) {
      return `
        visibility: hidden;
      `;
    }
    return `
      visibility: normal;
    `;
  }}
`;

const ReviewsList = ({ productID }) => {
  const [reviews, setReviews] = useState([]);
  const [reviewsShown, setReviewsShown] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentList, setCurrentList] = useState(1);
  const [reviewsPerPress] = useState(2);
  const [reviewsPerPage, setReviewsPerPage] = useState(2);
  const [hasReachedEnd, setHasReachedEnd] = useState(false);

  useEffect(() => {
    setLoading(true);
    axios('https://app-hrsei-api.herokuapp.com/api/fec2/hr-sfo/reviews/', {
      headers: config,
      params: { product_id: productID },
    })
      .then((list) => {
        console.log(list);
        setReviews(list.data.results);
        setReviewsShown(list.data.results.slice(0, reviewsPerPress));
        setLoading(false);
      })
      .catch((err) => {
        throw err;
      });
  }, []);

  // Update number of questions shown when currentList changes
  // useEffect(() => {
  //   setReviewsShown(reviews.slice(0, reviewsPerPress * currentList));
  //   if (reviews.length > 0 && reviews.length === reviewsShown.length) {
  //     setHasReachedEnd(true);
  //   }
  // }, [currentList]);

  // // Add more questions button disappears when end of list reached
  // useEffect(() => {
  //   if (reviews.length > 0 && reviews.length === reviewsShown.length) {
  //     setHasReachedEnd(true);
  //   }
  // }, [reviewsShown]);

  // 'Add more' button click handler increments currentList
  const onAddMoreClick = () => {
    setReviewsPerPage(reviewsPerPage + 2);
  };

  // Get current reviews
  const indexOfLastReview = currentList * reviewsPerPage;
  const indexOfFirstReview = indexOfLastReview - reviewsPerPage;
  const currentReviews = reviews.slice(indexOfFirstReview, indexOfLastReview);

  return (
    <div>
      <h1>Ratings and Reviews</h1>
      <Reviews reviews={currentReviews} loading={loading} />
      <Button onClick={onAddMoreClick}>More Reviews</Button>
      <button type="button">Add A Review +</button>
    </div>
  );
};

export default ReviewsList;
