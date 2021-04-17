import React, { useState, useEffect } from 'react';
import axios from 'axios';
import config from '../../../config.js';

const QuestionsAndAnswers = () => {
  const [questions, setQuestions] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentList, setList] = useState(1);
  const [questionsPerPress, setQuestionsPerPress] = useState(4);

  useEffect(() => {
    axios('https://app-hrsei-api.herokuapp.com/api/fec2/hr-sfo/qa/questions/?product_id=23145&count=4', { headers: config })
      .then((list) => {
        setQuestions(list.data.results);
      })
      .catch((err) => {
        throw err;
      });
  }, []);

  return (
    <div>
      <h1>Questions and Answers</h1>
      {questions.map((question) => (
        <div key={question.question_id}>{question.question_body}</div>
      ))}
    </div>
  );
};

export default QuestionsAndAnswers;