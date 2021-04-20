import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import Answer from './Answer.jsx';

const Question = ({ question, answers }) => {
  const [answersShown, setAnswersShown] = useState([]);
  const [isCollapsed, setIsCollapsed] = useState(true);
  const [answerButtonText, setAnswerButtonText] = useState('');

  const answersInfo = Object.values(answers);
  const answersBody = answersInfo.map((answer) => answer.body);

  const onAddMoreClick = () => {
    setIsCollapsed(!isCollapsed);
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
};

export default Question;
