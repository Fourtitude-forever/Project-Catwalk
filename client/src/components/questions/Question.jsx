import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import Answer from './Answer.jsx';

const Helpfulness = styled.span`
  &:hover {
    text-decoration: underline;
  }
`;

const Question = ({ id, question, answers, helpfulness }) => {
  const [answersShown, setAnswersShown] = useState([]);
  const [isCollapsed, setIsCollapsed] = useState(true);
  const [answerButtonText, setAnswerButtonText] = useState('');

  const answersInfo = Object.values(answers);
  const answersBody = answersInfo.map((answer) => answer.body);

  const onAddMoreClick = () => {
    setIsCollapsed(!isCollapsed);
  };

  const onHelpfulnessClick = (helpfulID) => {
    console.log('key id is', helpfulID);
  };

  useEffect(() => {
    if (answersBody.length <= 2) {
      // do not render button
    } else if (isCollapsed) {
      setAnswersShown(answersBody.slice(0, 2));
      setAnswerButtonText(<button type="button" onClick={onAddMoreClick}>Show More Answers</button>);
    } else {
      setAnswersShown(answersBody);
      setAnswerButtonText(<button type="button" onClick={onAddMoreClick}>Collapse Answers</button>);
    }
  }, [isCollapsed]);

  return (
    <div>
      <div>{`Q: ${question}`}</div>
      <p>
        Helpful?
        <Helpfulness onClick={() => onHelpfulnessClick(id)}>{` Yes (${helpfulness})`}</Helpfulness>
      </p>
      {answersShown.map((answer) => (
        <Answer answer={answer} />
      ))}
      {answerButtonText}
    </div>
  );
};

Question.propTypes = {
  question: PropTypes.string.isRequired,
  answers: PropTypes.object.isRequired,
  helpfulness: PropTypes.number.isRequired,
  id: PropTypes.number.isRequired,

};

export default Question;
