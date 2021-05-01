import React, { useState, useEffect } from 'react';
import { createGlobalStyle } from 'styled-components';
import axios from 'axios';

import ProductDetail from './productDetail/ProductDetail.jsx';
import RelatedProducts from './RelatedProducts/RelatedProducts.jsx';
import RatingsAndReviews from './RatingsAndReviews/RatingsAndReviews.jsx';
import QuestionList from './questions/QuestionList.jsx';
import withTracking from './Interactions/interactions.jsx';
import config from '../../../config';

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    background: #f6f5f5;
    font-family: Open-Sans, Helvetica, Sans-Serif;
  }
`;

const QuestionListWithTracking = withTracking(QuestionList);
const RelatedProductsWithTracking = withTracking(RelatedProducts);
const ProductDetailWithTracking = withTracking(ProductDetail);
const RatingsAndReviewsWithTracking = withTracking(RatingsAndReviews);

const App = () => {
  const [productID, setProductID] = useState(23145);
  const [productAvgRating, setProductAvgRating] = useState(0);
  const [starStyle, setStarStyle] = useState([]);

  useEffect(() => {
    const sendRequest = async () => {
      await axios({
        method: 'GET',
        url: 'https://app-hrsei-api.herokuapp.com/api/fec2/hr-sfo/reviews/',
        headers: config,
        params: { product_id: productID },
      })
        .then((resp) => {
          const { count } = resp.data;
          let tempRating = 0;
          resp.data.results.map((review) => {
            tempRating += (review.rating);
          });
          tempRating /= count;
          setProductAvgRating(tempRating);
        });
    };
    sendRequest();
  }, [productID]);

const onStarChange = (style) => {
    setStarStyle([...starStyle, style]);
  };

const onClickHandler = (relatedProductID) => {
    setProductID(relatedProductID);
  };

const deleteStarStyle = (product_id) => {
      setStarStyle(starStyle.filter((_, i) => i !== product_id));
  }

  return (
    <div>
      <GlobalStyle />
      <ProductDetail
        productID={productID}
        onStarChange={onStarChange}
        average={productAvgRating}
      />
      <RelatedProducts
        productID={productID}
        clickHandler={onClickHandler}
        average={productAvgRating}
        starStyle={starStyle}
        deleteStyle={deleteStarStyle}
        addStarStyle={onStarChange}
      />
      <RatingsAndReviews
        average={productAvgRating}
        productID={productID}
      />
      <QuestionListWithTracking
        productID={productID}
      />
    </div>
  );
};

export default App;
