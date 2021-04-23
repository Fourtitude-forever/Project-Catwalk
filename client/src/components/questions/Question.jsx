import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import Answer from './Answer.jsx';
import request from '../../lib/getInfo.js';
import { ThreadHeading, ThreadSubHeading, ThreadSubList, SmallButton, Icon } from '../../css/sharedcss.jsx';

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

const ReplyIcon = styled(Icon)`
  ${(props) => {
    if (props.showReplyIcon) {
      return `
        visibility: visible;
      `;
    }
  }}
`;

const QAThreadHeading = styled(ThreadHeading)`
  ${(props) => {
    if (props.showReplyIcon) {
      return `
        color: #1687a7;
      `;
    }
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
  const [showReplyIcon, setShowReplyIcon] = useState(false);

  const answersInfo = Object.values(answers);
  const answersBody = answersInfo.map((answer) => answer.body);

  const onAddMoreClick = () => {
    setIsCollapsed(!isCollapsed);
  };

  const onReplyHover = () => {
    setShowReplyIcon(!showReplyIcon);
  };

  const onHelpfulnessClick = (questionID) => {
    if (!isHelpfulClicked) {
      request.putRequest(questionID, 'helpful')
        .then((response) => console.log(response))
        .catch((err) => console.log(err))
        .then(() => {
          setIsHelpfulClicked(true);
        });
    }
  };

  const onReportClick = (questionID) => {
    if (!isReportClicked) {
      request.putRequest(questionID, 'report')
        .then((response) => console.log(response))
        .catch((err) => console.log(err))
        .then(() => setIsReportClicked(true));
    }
  };

  useEffect(() => {
    if (answersBody.length <= 2) {
      setAnswersShown(answersBody.slice(0, 2));
    } else if (isCollapsed) {
      setAnswersShown(answersBody.slice(0, 2));
      setAnswerButtonText(<SmallButton type="button" onClick={onAddMoreClick}>+</SmallButton>);
    } else {
      setAnswersShown(answersBody);
      setAnswerButtonText(<SmallButton type="button" onClick={onAddMoreClick}>-</SmallButton>);
    }
  }, [isCollapsed]);

  return (
    <div>
      <QAThreadHeading showReplyIcon={showReplyIcon} onMouseEnter={onReplyHover} onMouseLeave={onReplyHover}>{`Q: ${question}`}
        <ReplyIcon showReplyIcon={showReplyIcon} className="fas fa-reply" />
      </QAThreadHeading>
      <ThreadSubHeading>
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
      </ThreadSubHeading>
      <ThreadSubList>
        {answersShown.map((answer, i) => (
          <Answer answer={answer} key={i} />
        ))}
        {answerButtonText}
      </ThreadSubList>
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
