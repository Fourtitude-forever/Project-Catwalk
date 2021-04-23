import React from 'react';
import ProductDetail from './productDetail/ProductDetail.jsx';
import RelatedProducts from './RelatedProducts/RelatedProducts.jsx';
// import QuestionsAndAnswers from './QuestionsAndAnswers.jsx';
// import QuestionsAndAnswers from './QuestionsAndAnswers.jsx';
import RatingsAndReviews from './RatingsAndReviews/RatingsAndReviews.jsx';
import QuestionList from './questions/QuestionList.jsx';

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

  render() {
    // const { productID } = this.state.productID;
    return (
      <div>
        <GlobalStyle />
        <div>Hello From App</div>
        {/* <ProductDetail productID={productID} /> */}
        <RelatedProducts productID={this.state.productID} />
        {/* <QuestionsAndAnswers productID={productID} /> */}
        <ProductDetail productID={this.state.productID} />
        <RatingsAndReviews productID={this.state.productID} />
        <QuestionList productID={this.state.productID} />
      </div>
    );
  }
}

export default App;
