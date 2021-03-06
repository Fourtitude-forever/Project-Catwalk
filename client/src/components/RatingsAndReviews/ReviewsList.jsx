import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import Reviews from './Reviews.jsx';
import config from '../../../../config';
import AddReview from './AddReview.jsx';
import { SectionBG2, Button } from '../../css/sharedcss.jsx';

const HelpfulDiv = styled.div`
float: left;
display: flex;
padding-right: 20%;
`;

const StyledSectionBG2 = styled(SectionBG2)`
  padding-top: 0;
`;

const ReviewsList = ({ productID }) => {
  const [reviews, setReviews] = useState([]);
  const [reviewsShown, setReviewsShown] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentList, setCurrentList] = useState(1);
  const [reviewsPerPress] = useState(2);
  const [reviewsPerPage, setReviewsPerPage] = useState(2);

  useEffect(() => {
    setLoading(true);
    axios('https://app-hrsei-api.herokuapp.com/api/fec2/hr-sfo/reviews/', {
      headers: config,
      params: { product_id: productID },
    })
      .then((list) => {
        setReviews(list.data.results);
        setReviewsShown(list.data.results.slice(0, reviewsPerPress));
        setLoading(false);
      })
      .catch((err) => {
        throw err;
      });
  }, [productID]);

  // 'Add more' button click handler increments currentList
  const onAddMoreClick = () => {
    setReviewsPerPage(reviewsPerPage + 2);
  };

  // 'Sort Reviews' button click handler
  const onSortClick = () => {
    // console.log(reviews);
    const sortedReviews = reviews.sort((x, y) => y.rating - x.rating);
    setReviewsShown(sortedReviews);
  };

  // Get current reviews
  const indexOfLastReview = currentList * reviewsPerPage;
  const indexOfFirstReview = indexOfLastReview - reviewsPerPage;
  const currentReviews = reviews.slice(indexOfFirstReview, indexOfLastReview);

  return (
    <StyledSectionBG2>
      <Reviews reviews={currentReviews} loading={loading} />
      <HelpfulDiv>
        <Button onClick={onSortClick}>Sort Reviews</Button>
        <Button onClick={onAddMoreClick}>More Reviews </Button>
        <AddReview />
      </HelpfulDiv>
    </StyledSectionBG2>
  );
};

ReviewsList.propTypes = {
  productID: PropTypes.number.isRequired,
};

export default ReviewsList;
