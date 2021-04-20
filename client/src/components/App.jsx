import React from 'react';

// import ProductDetail from './ProductDetail.jsx';
// import RelatedProducts from './RelatedProducts.jsx';
// import QuestionsAndAnswers from './QuestionsAndAnswers.jsx';
import RatingsAndReviews from './RatingsAndReviews/RatingsAndReviews.jsx';
import QuestionList from './questions/QuestionList.jsx';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      productID: 23145,
    };
  }

  render() {
    // const { productID } = this.state.productID;
    return (
      <div>
        <div>Hello From App</div>

        {/* <ProductDetail productID={productID} />
        <RelatedProducts productID={productID} />
        <QuestionsAndAnswers productID={productID} /> */}
        <RatingsAndReviews productID={this.state.productID} />
<<<<<<< HEAD
        {/* <QuestionList productID={this.state.productID} /> */}
        {/* <QuestionList productID={this.state.productID} /> */}
=======
        <QuestionList productID={this.state.productID} />
>>>>>>> 892d627013edf7a2cc944f4e349c5a40d4bb27af
      </div>
    );
  }
}

export default App;
