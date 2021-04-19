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

  return (
    <div>
      <div>{`Q: ${question}`}</div>
      {answersBody.map((answer) => (
        <Answer answer={answer} />
      ))}
    </div>
  );
};

Question.propTypes = {
  question: PropTypes.string.isRequired,
  answers: PropTypes.object.isRequired,
};

export default Question;
