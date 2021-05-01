import React from 'react';
import styled from 'styled-components';
import moment from 'moment';
import PropTypes from 'prop-types';

import StarRating from './StarRating.jsx';
import { ThreadSubHeading, ThreadHeading, ThreadSubItem, Divider } from '../../css/sharedcss.jsx';

const Helpfulness = styled.span`
  ${(props) => {
    if (!props.alreadyClicked) {
      return `
        &:hover {
          text-decoration: underline;
        }
      `;
    }
    return `
    &:hover {
      text-decoration: none;
    }
    `;
  }}
`;

const SmallerStarDiv = styled.div`
  margin-top: 10px;
`;

const Reviews = ({ reviews, loading }) => {
  if (loading) {
    return <h2>Loading...</h2>;
  }
  return (
    <div>
      <div>
        {reviews.map((review) => (
          <div key={review.review_id}>
            <ThreadHeading>
              {review.summary}
            </ThreadHeading>
            <SmallerStarDiv>
              <StarRating stars={review.rating} />
            </SmallerStarDiv>
            <br />
            <ThreadSubItem>
              {review.body}
            </ThreadSubItem>
            <ThreadSubHeading>
              {review.reviewer_name.charAt(0).toUpperCase()
              + review.reviewer_name.substr(1).toLowerCase()}
              ,
              {'  '}
              {'  '}
              {moment(review.date).format('MMMM DD, YYYY')}
            </ThreadSubHeading>
            <ThreadSubHeading>
              Helpful?
              <Helpfulness>
                {` Yes (${review.helpfulness}) `}
              </Helpfulness>
              <Helpfulness>
                Report
              </Helpfulness>
            </ThreadSubHeading>
            <Divider />
          </div>
        ))}
      </div>
    </div>
  );
};

Reviews.propTypes = {
  reviews: PropTypes.array.isRequired,

};

export default Reviews;
