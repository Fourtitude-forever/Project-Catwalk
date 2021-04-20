import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import axios from 'axios';
import $ from 'jquery';

import config from '../../../../config.js';
import Answer from './Answer.jsx';

const Helpfulness = styled.span`
  ${(props) => {
    if (!props.alreadyClicked) {
      return `
        &:hover {
          text-decoration: underline;
        }
      `;
    }
    return `
    &:hover {
      text-decoration: none;
    }
    `;
  }}
`;

const Report = styled(Helpfulness)``;

const Question = ({
  id, question, answers, helpfulness,
}) => {
  const [answersShown, setAnswersShown] = useState([]);
  const [isCollapsed, setIsCollapsed] = useState(true);
  const [answerButtonText, setAnswerButtonText] = useState('');
  const [isHelpfulClicked, setIsHelpfulClicked] = useState(false);
  const [isReportClicked, setIsReportClicked] = useState(false);

  const answersInfo = Object.values(answers);
  const answersBody = answersInfo.map((answer) => answer.body);

  const onAddMoreClick = () => {
    setIsCollapsed(!isCollapsed);
  };

  const onHelpfulnessClick = (questionID) => {
    if (!isHelpfulClicked) {
      axios.put(`https://app-hrsei-api.herokuapp.com/api/fec2/hr-sfo/qa/questions/${questionID}/helpful/`, {
        headers: config,
      })
        .then((response) => console.log(response))
        .catch((err) => console.log(err))
        .then(() => {
          setIsHelpfulClicked(true);
        });
      // $.ajax({
      //   method: 'PUT',
      //   url: `https://app-hrsei-api.herokuapp.com/api/fec2/hr-sfo/qa/questions/${questionID}/helpful`,
      //   headers: {
      //     Authorization: config.API_KEY,
      //   },
      //   success: (response) => {
      //     console.log(response);
      //   },
      //   error: (err) => console.error(err),
      // });
    }
  };

  const onReportClick = (questionID) => {
    if (!isReportClicked) {
      axios.put(`https://app-hrsei-api.herokuapp.com/api/fec2/hr-sfo/qa/questions/${questionID}/report/`, {
        headers: config,
      })
        .then((response) => console.log(response))
        .catch((err) => console.log(err))
        .then(() => setIsReportClicked(true));
    }
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
        <Helpfulness
          alreadyClicked={isHelpfulClicked}
          onClick={() => onHelpfulnessClick(id)}
        >
          {` Yes (${helpfulness}) `}
        </Helpfulness>
        <Report
          alreadyClicked={isReportClicked}
          onClick={() => onReportClick(id)}
        >
          Report
        </Report>
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
