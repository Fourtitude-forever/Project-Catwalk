import React from 'react';
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> ce2acdf3e3c72115d4823815081231679be2b9d6
// import ProductDetail from './ProductDetail.jsx';
// import RelatedProducts from './RelatedProducts.jsx';
// import QuestionsAndAnswers from './QuestionsAndAnswers.jsx';
import RatingsAndReviews from './RatingsAndReviews/RatingsAndReviews.jsx';
<<<<<<< HEAD
=======
import QuestionList from './questions/QuestionList.jsx';
>>>>>>> main
=======
import QuestionList from './questions/QuestionList.jsx';
>>>>>>> ce2acdf3e3c72115d4823815081231679be2b9d6

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
=======
>>>>>>> ce2acdf3e3c72115d4823815081231679be2b9d6
        {/* <ProductDetail productID={productID} />
        <RelatedProducts productID={productID} />
        <QuestionsAndAnswers productID={productID} /> */}
        <RatingsAndReviews productID={productID} />
<<<<<<< HEAD
=======
        <QuestionList productID={this.state.productID} />
>>>>>>> main
=======
        <QuestionList productID={this.state.productID} />
>>>>>>> ce2acdf3e3c72115d4823815081231679be2b9d6
      </div>
    );
  }
}

export default App;
