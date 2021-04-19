import React from 'react';
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
        <QuestionList productID={this.state.productID} />
      </div>
    );
  }
}

export default App;
