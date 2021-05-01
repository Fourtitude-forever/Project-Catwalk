import React from 'react';
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

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      productID: 23149,
      productAvgRating: 0,
      starStyle: [],
    };

    this.onStarChange = this.onStarChange.bind(this);
    this.onClickHandler = this.onClickHandler.bind(this);
  }

  componentDidMount() {
    const sendRequest = async () => {
      await axios({
        method: 'GET',
        url: 'https://app-hrsei-api.herokuapp.com/api/fec2/hr-sfo/reviews/',
        headers: config,
        params: { product_id: this.state.productID },
      })
        .then((resp) => {
          const { count } = resp.data;
          let tempRating = 0;
          resp.data.results.map((review) => {
            tempRating += (review.rating);
          });
          tempRating /= count;
          this.setState({ productAvgRating: tempRating });
        });
    };
    sendRequest();
  }

  onStarChange(style) {
    this.setState({ starStyle: [...this.state.starStyle, style]});
  }

  onClickHandler(relatedProduct_id) {
    this.setState({productID: relatedProduct_id})
  }

  render() {
    // const { productID } = this.state.productID;
    console.log('this is state', this.state);
    return (
      <div>
        <GlobalStyle />
        <div>Hello From App</div>
        <ProductDetail
          productID={this.state.productID}
          onStarChange={this.onStarChange}
          average={this.state.productAvgRating}
        />
        <RelatedProducts
          productID={this.state.productID}
          clickHandler={this.onClickHandler}
          average={this.state.productAvgRating}
          starStyle={this.state.starStyle}
        />
        <RatingsAndReviews
          average={this.state.productAvgRating}
          productID={this.state.productID}
        />
        <QuestionListWithTracking
          productID={this.state.productID}
        />
      </div>
    );
  }
}

export default App;
