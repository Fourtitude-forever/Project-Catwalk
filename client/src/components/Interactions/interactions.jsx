import React, { useState, useEffect } from 'react';
import request from '../../lib/getInfo.js';

function withTracking(WrappedComponent) {
  return (props) => {
    const [countClick, setCountClick] = useState(0);

    const onComponentClick = (event) => {
      event.persist();
      const timeStamp = new Date().toISOString();
      request.postInteractionRequest(event.target.toString(), WrappedComponent.name, timeStamp)
        .then(() => console.log('success'))
        .catch((err) => console.log(err));
    };

    return (
      <WrappedComponent
        onCompClick={(event) => onComponentClick(event)}
        {...props}
      />
    );
  };
}

// const QuestionListWithTracking = withTracking(QuestionList);
// const RelatedProductsWithTracking = withTracking(RelatedProducts);
// const ProductDetailWithTracking = withTracking(ProductDetail);
// const RatingsAndReviewsWithTracking = withTracking(RatingsAndReviews);

export default withTracking;
// export default RelatedProductsWithTracking;
// export default ProductDetailWithTracking;
// export default RatingsAndReviewsWithTracking;
