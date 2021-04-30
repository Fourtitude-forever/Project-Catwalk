import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import $ from 'jquery';

import request from '../../lib/getInfo.js';
import {
  Headers2, Button, CloseButton, Form, FormInput, Modal, FormError,
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

const FormErr = styled(FormError)`
  ${(props) => {
    if (!props.hasError) {
      return `
        display: none;
      `;
    }
  }}
`;

const AddAnswer = ({
  productName, onOpenModalClick, question, showModal, id,
}) => {
  const [unfilledError, setUnfilledError] = useState(false);
  const [incorrectEmail, setIncorrectEmail] = useState(false);

  const clearForm = (index) => {
    // if (index) { $('#question-form')[0].reset(); }
    $('#question-form')[0].reset();
  };

  const onModalSubmit = (event) => {
    event.preventDefault();
    const parsedForm = $(`#question-${id}`).serializeArray();

    let errFlag = false;
    setUnfilledError(false);
    setIncorrectEmail(false);

    parsedForm.forEach((entry) => {
      if (entry.value === '') {
        errFlag = true;
        setUnfilledError(true);
      }
    });
    if (!parsedForm[2].value.includes('@')) {
      errFlag = true;
      setIncorrectEmail(true);
    }
    if (!errFlag) {
      request.postAnswerRequest(id, parsedForm)
        .then(() => {
          console.log('Post Success!');
          onOpenModalClick();
        })
        .then(() => location.reload())
        .catch((err) => { console.log(err); });
    }
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
          <FormErr hasError={unfilledError}>All fields denoted * are required</FormErr>
          <FormErr hasError={incorrectEmail}>Email provided is invalid</FormErr>
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
