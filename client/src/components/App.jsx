import React from 'react';
import ProductDetail from './productDetail/ProductDetail.jsx';
<<<<<<< HEAD
// import RelatedProducts from './RelatedProducts.jsx';
=======
import RelatedProducts from './RelatedProducts/RelatedProducts.jsx';
// import QuestionsAndAnswers from './QuestionsAndAnswers.jsx';
>>>>>>> 28f08c18456d8a6547cd59fd3afe34928c9b66b7
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
        {/* <ProductDetail productID={productID} /> */}
        <RelatedProducts productID={this.state.productID} />
        {/* <QuestionsAndAnswers productID={productID} /> */}
        <ProductDetail productID={this.state.productID}/>
        <RatingsAndReviews productID={this.state.productID} />
        <QuestionList productID={this.state.productID} />
      </div>
    );
  }
}

export default App;
