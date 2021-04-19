import React from 'react';
<<<<<<< HEAD
// import ProductDetail from './ProductDetail.jsx';
// import RelatedProducts from './RelatedProducts.jsx';
// import QuestionsAndAnswers from './QuestionsAndAnswers.jsx';
import RatingsAndReviews from './RatingsAndReviews/RatingsAndReviews.jsx';
=======
import QuestionList from './questions/QuestionList.jsx';
>>>>>>> main

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
<<<<<<< HEAD
        {/* <ProductDetail productID={productID} />
        <RelatedProducts productID={productID} />
        <QuestionsAndAnswers productID={productID} /> */}
        <RatingsAndReviews productID={productID} />
=======
        <QuestionList productID={this.state.productID} />
>>>>>>> main
      </div>
    );
  }
}

export default App;
