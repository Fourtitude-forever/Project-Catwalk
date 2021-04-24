import React, { useState, useEffect } from 'react';
import QuestionList from '../questions/QuestionList.jsx';
import request from '../../lib/getInfo.js';


function withTracking(WrappedComponent, eventHandler) {
  return (props) => {
    const [countClick, setCountClick] = useState(0);

    const onComponentClick = (event) => {
      event.persist();
      console.log('clicked widget is: ', WrappedComponent.name);
      console.log('clicked element is: ', event.target);
      const timeStamp = new Date().toISOString();
      console.log('clicked time is: ', timeStamp);
      request.postInteractionRequest(event.target.toString(), WrappedComponent.name, timeStamp)
        .then(() => console.log('success'))
        .catch((err) => console.log(err));
    };


    return (
      <WrappedComponent
        onCompClick={(event) => onComponentClick(event)}
        {...props}
      />
    );
  };
}

const QuestionListWithTracking = withTracking(QuestionList);

export default QuestionListWithTracking;
