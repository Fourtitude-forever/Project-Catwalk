import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import Search from './Search.jsx';
import Question from './Question.jsx';
import request from '../../lib/getInfo.js';
import { Headers2, SectionBG1, Button, SmallButton } from '../../css/sharedcss.jsx';

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

const QuestionModal = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 100;
  & > div {
    width: 50%;
    position: absolute;
    top: 50%;
    left: 25%;
    background-color: #d3e0ea;
    border-radius: 30px;
  }
  ${(props) => {
    if (!props.showModal) {
      return `
        visibility: hidden;
      `;
    }
  }}
`;

const QuestionList = ({ productID }) => {
  const [questions, setQuestions] = useState([]);
  const [questionsShown, setQuestionsShown] = useState([]);
  const [isloading, setLoading] = useState(false);
  const [currentList, setList] = useState(1);
  const [questionsPerPress] = useState(4);
  const [hasReachedEnd, setHasReachedEnd] = useState(false);
  const [searchInput, setSearchInput] = useState('');
  const [showModal, setShowModal] = useState(false);

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

  let loadingIcon;
  if (isloading) {
    loadingIcon = <p>Please wait...loading</p>;
  }

  let anyQuestions = false;
  if (questions.length > 0) {
    anyQuestions = true;
  }

  return (
    <SectionBG1>

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
        />
      ))}
      <QuestionButton type="button" reachedEnd={hasReachedEnd} onClick={onAddMoreClick}>See More Questions...</QuestionButton>
      <Button type="button" onClick={() => setShowModal(true)}>Add a Question</Button>

      <QuestionModal showModal={showModal} id="open-modal" className="modal-window">
        <div>
          <SmallButton type="button" onClick={() => setShowModal(false)}>X</SmallButton>
          <h1>Voilà!</h1>
          <div>A CSS-only modal based on the :target pseudo-className</div>
        </div>
      </QuestionModal>

    </SectionBG1>
  );
};

QuestionList.propTypes = {
  productID: PropTypes.number.isRequired,
};

export default QuestionList;
