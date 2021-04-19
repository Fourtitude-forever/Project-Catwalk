import React from 'react';
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> ce2acdf3e3c72115d4823815081231679be2b9d6
=======
>>>>>>> 6bfd6a5fbf0d127b1cf36cec099f831fd4191bea
// import ProductDetail from './ProductDetail.jsx';
// import RelatedProducts from './RelatedProducts.jsx';
// import QuestionsAndAnswers from './QuestionsAndAnswers.jsx';
import RatingsAndReviews from './RatingsAndReviews/RatingsAndReviews.jsx';
<<<<<<< HEAD
<<<<<<< HEAD
=======
import QuestionList from './questions/QuestionList.jsx';
>>>>>>> main
=======
import QuestionList from './questions/QuestionList.jsx';
>>>>>>> ce2acdf3e3c72115d4823815081231679be2b9d6
=======
import QuestionList from './questions/QuestionList.jsx';
>>>>>>> 6bfd6a5fbf0d127b1cf36cec099f831fd4191bea

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
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> ce2acdf3e3c72115d4823815081231679be2b9d6
=======
>>>>>>> 6bfd6a5fbf0d127b1cf36cec099f831fd4191bea
        {/* <ProductDetail productID={productID} />
        <RelatedProducts productID={productID} />
        <QuestionsAndAnswers productID={productID} /> */}
        <RatingsAndReviews productID={productID} />
<<<<<<< HEAD
<<<<<<< HEAD
=======
        <QuestionList productID={this.state.productID} />
>>>>>>> main
=======
        <QuestionList productID={this.state.productID} />
>>>>>>> ce2acdf3e3c72115d4823815081231679be2b9d6
=======
        <QuestionList productID={this.state.productID} />
>>>>>>> 6bfd6a5fbf0d127b1cf36cec099f831fd4191bea
      </div>
    );
  }
}

export default App;
