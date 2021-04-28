import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import Search from './Search.jsx';
import Question from './Question.jsx';
import request from '../../lib/getInfo.js';
import AddQuestion from './AddQuestion.jsx';
import { Headers2, SectionBG1, Button } from '../../css/sharedcss.jsx';

const QuestionButton = styled(Button)`

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

const QuestionList = ({ productID, onCompClick }) => {
  const [questions, setQuestions] = useState([]);
  const [questionsShown, setQuestionsShown] = useState([]);
  const [isloading, setLoading] = useState(false);
  const [currentList, setList] = useState(1);
  const [questionsPerPress] = useState(4);
  const [hasReachedEnd, setHasReachedEnd] = useState(false);
  const [searchInput, setSearchInput] = useState('');
  const [showModal, setShowModal] = useState(false);
  const [productName, setProductName] = useState('');

  useEffect(() => {
    setLoading(true);
    request.getProductRequest(productID)
      .then((list) => {
        setQuestions(list.data.results);
        setQuestionsShown(list.data.results.slice(0, questionsPerPress));
        setLoading(false);
      })
      .catch((err) => {
        throw err;
      });
    request.getProductInfo(productID)
      .then((info) => {
        setProductName(info.data.name);
      })
      .catch((err) => { throw err; });
  }, []);

  // Update number of questions shown when currentList changes
  useEffect(() => {
    setQuestionsShown(questions.slice(0, questionsPerPress * currentList));
    if (questions.length > 0 && questions.length === questionsShown.length) {
      setHasReachedEnd(true);
    }
  }, [currentList]);

  // Add more questions button disappears when end of list reached
  useEffect(() => {
    if (questions.length > 0 && questions.length === questionsShown.length) {
      setHasReachedEnd(true);
    }
  }, [questionsShown]);

  // 'Add more' button click handler increments currentList
  const onAddMoreClick = () => {
    setList(currentList + 1);
  };

  const onSearchChange = (event) => {
    event.preventDefault();
    event.persist();
    setSearchInput(event.target.value);
  };

  const onSearchSubmit = (event) => {
    event.preventDefault();
    const queryArray = [];
    questions.forEach((question) => {
      if (question.question_body.toLowerCase().includes(searchInput)) {
        queryArray.push(question);
        return;
      }
      const answersPerQ = Object.values(question.answers);
      let searchFound = false;
      answersPerQ.forEach((answer) => {
        if (answer.body.toLowerCase().includes(searchInput) && !searchFound) {
          queryArray.push(question);
          searchFound = true;
        }
      });
    });
    setQuestionsShown(queryArray);
  };

  const onOpenModalClick = () => {
    setShowModal(!showModal);
  };

  let loadingIcon;
  if (isloading) {
    loadingIcon = <p>Please wait...loading</p>;
  }

  let anyQuestions = false;
  if (questions.length > 0) {
    anyQuestions = true;
  }

  return (
    <SectionBG1 onClick={onCompClick}>
      <Headers2>Questions and Answers</Headers2>
      {loadingIcon}
      <Search
        anyQuestions={anyQuestions}
        onSearchChange={onSearchChange}
        onSearchSubmit={onSearchSubmit}
      />
      {questionsShown.map((question) => (
        <Question
          key={question.question_id}
          id={question.question_id}
          question={question.question_body}
          answers={question.answers}
          helpfulness={question.question_helpfulness}
          productName={productName}
        />
      ))}
      <Button type="button" onClick={onOpenModalClick}>Add a Question</Button>
      <QuestionButton type="button" reachedEnd={hasReachedEnd} onClick={onAddMoreClick}>See More Questions...</QuestionButton>
      <AddQuestion
        showModal={showModal}
        productName={productName}
        onOpenModalClick={onOpenModalClick}
        productID={productID}
      />

    </SectionBG1>
  );
};

QuestionList.propTypes = {
  productID: PropTypes.number.isRequired,
};

export default QuestionList;
