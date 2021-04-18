import React from 'react';
import QuestionsAndAnswers from './questions/QuestionsAndAnswers.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      productID: 23145,
    };
  }

  render() {
    const { productID } = this.state.productID;
    return (
      <div>
        <div>Hello From App</div>
        <QuestionsAndAnswers productID={productID} />
      </div>
    );
  }
}

export default App;
