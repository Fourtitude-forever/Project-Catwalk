import React from 'react';
import ProductDetail from './ProductDetail.jsx';
import RelatedProducts from './RelatedProducts.jsx';
import QuestionsAndAnswers from './QuestionsAndAnswers.jsx';
import RatingsAndReviews from './RatingsAndReviews.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      productID: 23145
    };
  }

  render() {
    return (
      <div>
        <div>Hello From App</div>
        <ProductDetail />
        <RelatedProducts />
        <QuestionsAndAnswers />
        <RatingsAndReviews />
      </div>
    );
  }
}

export default App;
