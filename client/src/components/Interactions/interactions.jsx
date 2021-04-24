import React, { useState, useEffect } from 'react';
import QuestionList from '../questions/QuestionList.jsx';

function withTracking(WrappedComponent, eventHandler) {
  return (props) => {
    const [countClick, setCountClick] = useState(0);

    const onComponentClick = (event) => {
      console.log('click event is: ', event);
      setCountClick(countClick + 1);
    };

    useEffect(() => {
      console.log('countClick is ', countClick);
    }, []);

    return (
      <WrappedComponent
        // data={countClick}
        onCompClick={(event) => eventHandler.touchStart(event)}
        {...props}
      />
    );
  };
}
//   return class extends React.Component {
//     constructor(props) {
//       super(props);
//       this.state = {
//         clickCount: 0,
//       };
//     }

//     onComponentClick(event) {
//       console.log('click event is: ', event);
//       this.setState({ clickCount: this.state.clickCount + 1 });
//     }

//     render() {
//       return (
//         <WrappedComponent
//           onClick={(e) => this.onComponentClick(e)}
//           {...this.props}
//         />
//       );
//     }
//   };
// }

const QuestionListWithTracking = withTracking(QuestionList, { touchStart: () => console.log('touchStart') });

export default QuestionListWithTracking;
