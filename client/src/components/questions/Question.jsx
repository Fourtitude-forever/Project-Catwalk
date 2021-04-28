import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import Answer from './Answer.jsx';
import AddAnswer from './AddAnswer.jsx';
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

const AnswerHeading = styled(ThreadHeading)`
  vertical-align: top;
  font-size: 0.8em;
  ${(props) => {
    if (!props.answerLength) {
      return `
        visibility: hidden;
      `;
    }
  }}
`;

const Report = styled(Helpfulness)``;

const Question = ({
  id, question, answers, helpfulness, productName,
}) => {
  const [answersShown, setAnswersShown] = useState([]);
  const [isCollapsed, setIsCollapsed] = useState(true);
  const [answerButtonText, setAnswerButtonText] = useState('');
  const [isHelpfulClicked, setIsHelpfulClicked] = useState(false);
  const [isReportClicked, setIsReportClicked] = useState(false);
  const [showReplyIcon, setShowReplyIcon] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const answersPerPress = 2;
  const answersInfo = Object.values(answers);

  const onAddMoreClick = () => {
    setIsCollapsed(!isCollapsed);
  };

  const onReplyHover = () => {
    setShowReplyIcon(!showReplyIcon);
  };

  const onOpenModalClick = () => {
    setShowModal(!showModal);
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
    if (answersInfo.length <= answersPerPress) {
      setAnswersShown(answersInfo.slice(0, answersPerPress));
    } else if (isCollapsed) {
      setAnswersShown(answersInfo.slice(0, answersPerPress));
      setAnswerButtonText(<SmallButton type="button" aria-label="add" onClick={onAddMoreClick}>+</SmallButton>);
    } else {
      setAnswersShown(answersInfo);
      setAnswerButtonText(<SmallButton type="button" aria-label="less" onClick={onAddMoreClick}>-</SmallButton>);
    }
  }, [isCollapsed]);

  return (
    <div>
      <QAThreadHeading showReplyIcon={showReplyIcon} onMouseEnter={onReplyHover} onMouseLeave={onReplyHover} onClick={onOpenModalClick}>{`Q: ${question}`}
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
      <AnswerHeading as="span" answerLength={answersShown.length}>A: </AnswerHeading>
      <ThreadSubList>
        {answersShown.map((answer, i) => (
          <Answer answer={answer} key={i} />
        ))}
        {answerButtonText}
      </ThreadSubList>
      <AddAnswer
        showModal={showModal}
        productName={productName}
        onOpenModalClick={onOpenModalClick}
        question={question}
        id={id}
      />
    </div>
  );
};

Question.propTypes = {
  question: PropTypes.string.isRequired,
  answers: PropTypes.object.isRequired,
  helpfulness: PropTypes.number.isRequired,
  id: PropTypes.number.isRequired,
  productName: PropTypes.string.isRequired,
};

export default Question;
