import React, { useState, useEffect } from 'react';
import QuestionList from '../questions/QuestionList.jsx';

function withTracking(WrappedComponent) {
  return class extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        clickCount: 0,
      };
    }

    onComponentclick(event) {
      console.log('click event is: ', event);
      this.setState({ clickCount: this.state.clickCount + 1 });
    }

    render() {
      // ... and renders the wrapped component with the fresh data!
      // Notice that we pass through any additional props
      return (
        <WrappedComponent
          onClick={(e) => this.onComponentClick(e)}
          {...this.props}
        />
      );
    }
  };
}

const QuestionListWithTracking = withTracking(QuestionList);

export default QuestionListWithTracking;
