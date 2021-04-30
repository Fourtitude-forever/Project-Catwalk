import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import $ from 'jquery';

import request from '../../lib/getInfo.js';
import {
  Headers2, Button, CloseButton, Form, FormInput, Modal,
} from '../../css/sharedcss.jsx';

const AnswerModal = styled(Modal)`
  ${(props) => {
    if (!props.showModal) {
      return `
        visibility: hidden;
      `;
    }
  }}
`;

const AddAnswer = ({
  productName, onOpenModalClick, question, showModal, id,
}) => {
  const onModalSubmit = (event) => {
    event.preventDefault();
    const rawParsedForm = $(`#question-${id}`).serializeArray();
    request.postAnswerRequest(id, rawParsedForm)
      .then(() => {
        console.log('Post Success!');
        onOpenModalClick();
      })
      .then(() => location.reload())
      .catch((err) => { console.log(err); });
  };

  return (
    <AnswerModal showModal={showModal}>
      <div>
        <CloseButton type="button" onClick={onOpenModalClick}>X</CloseButton>
        <Headers2>Submit Your Answer!</Headers2>
        <h3>{`${productName}: ${question}`}</h3>
        <Form id={`question-${id}`}>
          <label>
            Your Answer:*
            <FormInput type="text" name="answer" required />
          </label>
          <label>
            What is your nickname:*
            <FormInput type="text" name="nickname" placeholder="Example: jack543!" required />
          </label>
          <label>
            Your email:*
            <FormInput type="text" name="email" placeholder="Example: jack@email.com" required />
          </label>
          <Button as="input" type="submit" onClick={onModalSubmit} />
        </Form>
      </div>
    </AnswerModal>
  );
};

AddAnswer.propTypes = {
  productName: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
  onOpenModalClick: PropTypes.func.isRequired,
  showModal: PropTypes.bool.isRequired,
  question: PropTypes.string.isRequired,

};
export default AddAnswer;
