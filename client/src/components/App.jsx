import React from 'react';
import { createGlobalStyle } from 'styled-components'

import ProductDetail from './productDetail/ProductDetail.jsx';
import RelatedProducts from './RelatedProducts/RelatedProducts.jsx';
import RatingsAndReviews from './RatingsAndReviews/RatingsAndReviews.jsx';
import QuestionList from './questions/QuestionList.jsx';
import QuestionListWithTracking from './Interactions/interactions.jsx';

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    background: #f6f5f5;
    font-family: Open-Sans, Helvetica, Sans-Serif;
  }
`;

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      productID: 23146,
    };
  }

  onComponentclick(event) {
    console.log('click event is: ', event);
    this.setState({ clickCount: this.state.clickCount + 1 });
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
        <QuestionList
          onClick={() => this.onComponentClick}
          productID={this.state.productID}
        />
      </div>
    );
  }
}

export default App;
