import React from 'react';
import styled from 'styled-components';
import * as moment from 'moment';

import { ThreadSubList, ThreadHeading, ThreadSubHeading } from '../../css/sharedcss.jsx';

const RatingsAndDateContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Reviews = ({ reviews, loading }) => {
  if (loading) {
    return <h2>Loading...</h2>;
  }

  console.log(reviews);
  return (
    <div>
      <div>
        {reviews.map((review) => (
          <div key={review.review_id}>
            <span>{review.rating}</span>
            <span> </span>
            <ThreadHeading>
              {' '}
              {' '}
              {review.reviewer_name.charAt(0).toUpperCase()
              + review.reviewer_name.substr(1).toLowerCase()}
              ,
              {' '}
              {' '}
              {moment(review.date).format('MMMM DD, YYYY')}
            </ThreadHeading>
            <span>
              <ThreadSubList>
                Summary:
                {review.summary}
              </ThreadSubList>
            </span>
            <span>
              <ThreadSubList>
                Full:
                {review.body}
              </ThreadSubList>
            </span>
            <ThreadSubHeading />
          </div>
        ))}
      </div>
    </div>
  );
};
export default Reviews;
