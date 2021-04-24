import React from 'react';
import { createGlobalStyle } from 'styled-components'

import ProductDetail from './productDetail/ProductDetail.jsx';
import RelatedProducts from './RelatedProducts/RelatedProducts.jsx';
import RatingsAndReviews from './RatingsAndReviews/RatingsAndReviews.jsx';
import QuestionList from './questions/QuestionList.jsx';
import withTracking from './Interactions/interactions.jsx';

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

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      productID: 23146,
    };
  }

  render() {
    // const { productID } = this.state.productID;
    return (
      <div>
        <GlobalStyle />
        <div>Hello From App</div>
        <RelatedProducts productID={this.state.productID} />
        <ProductDetail productID={this.state.productID} />
        <RatingsAndReviews productID={this.state.productID} />
        <QuestionListWithTracking
          productID={this.state.productID}
        />
      </div>
    );
  }
}

export default App;
