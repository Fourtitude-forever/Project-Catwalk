import React, { useState, useEffect } from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';
import Answer from './Answer.jsx';

const Question = ({ question, answers }) => {
  const [answersShown, setAnswersShown] = useState([]);
  const [currentList, setList] = useState(1);
  const [answersPerPress] = useState(2);

  const answersInfo = Object.values(answers);
  const answersBody = answersInfo.map((answer) => answer.body);

  useEffect(() => {
    setAnswersShown(answersBody.slice(0, currentList * answersPerPress));
  }, [currentList]);

  const onAddMoreClick = () => {
    setList(currentList + 1);
  };

  return (
    <div>
      <div>{`Q: ${question}`}</div>
      {answersShown.map((answer) => (
        <Answer answer={answer} />
      ))}
      <button type="button" onClick={onAddMoreClick}>See More Answers...</button>
    </div>
  );
};

Question.propTypes = {
  question: PropTypes.string.isRequired,
  answers: PropTypes.object.isRequired,
};

export default Question;
