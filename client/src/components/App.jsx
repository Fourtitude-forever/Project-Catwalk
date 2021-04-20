import React from 'react';
<<<<<<< HEAD
import ProductDetail from './productDetail/ProductDetail.jsx';
=======

// import ProductDetail from './ProductDetail.jsx';
>>>>>>> 95d34eb3c0f233f59afc9cbc898dceeb8e726bc9
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
        <ProductDetail productID={this.state.productID}/>
        <RatingsAndReviews productID={this.state.productID} />
        {/* <QuestionList productID={this.state.productID} /> */}
        {/* <QuestionList productID={this.state.productID} /> */}
      </div>
    );
  }
}

export default App;
