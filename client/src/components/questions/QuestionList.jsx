import React, { useState, useEffect } from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import config from '../../../../config.js';
import Question from './Question.jsx';

const Button = styled.button`
  ${(props) => {
    if (props.reachedEnd) {
      return `
        visibility: hidden;
      `;
    }
    return `
      visibility: normal;
    `;
  }}
`;

const QuestionList = ({ productID }) => {
  const [questions, setQuestions] = useState([]);
  const [questionsShown, setQuestionsShown] = useState([]);
  const [isloading, setLoading] = useState(false);
  const [currentList, setList] = useState(1);
  const [questionsPerPress] = useState(4);
  const [hasReachedEnd, setHasReachedEnd] = useState(false);

  useEffect(() => {
    setLoading(true);
    axios('https://app-hrsei-api.herokuapp.com/api/fec2/hr-sfo/qa/questions/', {
      headers: config,
      params: { product_id: productID },
    })
      .then((list) => {
        setQuestions(list.data.results);
        setQuestionsShown(list.data.results.slice(0, questionsPerPress));
        setLoading(false);
        // setAnswers(list.data.results.map((result) => result.answers));
      })
      .catch((err) => {
        throw err;
      });
  }, []);

  // Update number of questions shown when currentList changes
  useEffect(() => {
    setQuestionsShown(questions.slice(0, questionsPerPress * currentList));
    console.log('questionsPerPress * currentList ', questionsPerPress * currentList);
    console.log('questions length ', questions.length);
    console.log('questionsShown length ', questionsShown.length);

    if (questions.length > 0 && questions.length === questionsShown.length) {
      setHasReachedEnd(true);
    }
  }, [currentList]);

  // 'Add more' button click handler increments currentList
  const onAddMoreClick = () => {
    setList(currentList + 1);
  };

  let loadingIcon;
  if (isloading) {
    loadingIcon = <p>Please wait...loading</p>;
  }

  return (
    <div>
      <h1>Questions and Answers</h1>
      {loadingIcon}
      {questionsShown.map((question) => (
        <Question
          key={question.question_id}
          question={question.question_body}
          answers={question.answers}
        />
      ))}
      <Button type="button" reachedEnd={hasReachedEnd} onClick={onAddMoreClick}>See More Questions...</Button>
    </div>
  );
};

QuestionList.propTypes = {
  productID: PropTypes.number.isRequired,
};

export default QuestionList;
