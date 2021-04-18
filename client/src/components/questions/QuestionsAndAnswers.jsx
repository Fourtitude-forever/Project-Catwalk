import React, { useState, useEffect } from 'react';
import axios from 'axios';
import config from '../../../../config.js';
import Question from './Question.jsx';

const QuestionsAndAnswers = () => {
  const [questions, setQuestions] = useState([]);
  const [questionsShown, setQuestionsShown] = useState([]);
  const [isloading, setLoading] = useState(false);
  const [currentList, setList] = useState(1);
  const [questionsPerPress] = useState(4);

  useEffect(() => {
    setLoading(true);
    axios('https://app-hrsei-api.herokuapp.com/api/fec2/hr-sfo/qa/questions/?product_id=23145', {
      headers: config,
    })
      .then((list) => {
        setQuestions(list.data.results);
        setQuestionsShown(list.data.results.slice(0, questionsPerPress));
        setLoading(false);
      })
      .catch((err) => {
        throw err;
      });
  }, []);

  // Update number of questions shown when currentList changes
  useEffect(() => {
    setQuestionsShown(questions.slice(0, questionsPerPress * currentList));
  }, [currentList]);

  // 'Add more' button click handler increments currentList
  const onAddMoreClick = () => {
    if (questions.length > currentList * questionsPerPress) {
      setList(currentList + 1);
    }
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
        <Question key={question.question_id} question={question.question_body} />
      ))}
      <button type="button" onClick={onAddMoreClick}>See More...</button>
    </div>
  );
};

export default QuestionsAndAnswers;
