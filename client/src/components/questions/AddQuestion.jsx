import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import $ from 'jquery';

import request from '../../lib/getInfo.js';
import {
  Headers2, Button, CloseButton, Form, FormInput, Modal, FormError,
} from '../../css/sharedcss.jsx';

const QuestionModal = styled(Modal)`
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

const AddQuestion = ({
  productName, onOpenModalClick, productID, showModal,
}) => {
  const [unfilledError, setUnfilledError] = useState(false);
  const [incorrectEmail, setIncorrectEmail] = useState(false);

  const clearForm = (index) => {
    // if (index) { $('#question-form')[0].reset(); }
    $('#question-form')[0].reset();
  };

  const onModalSubmit = (event) => {
    event.preventDefault();
    const parsedForm = $('#question-form').serializeArray();

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
      request.postQuestionRequest(productID, parsedForm)
        .then((success) => {
          console.log(success);
          onOpenModalClick();
        })
        .then(() => clearForm())
        .catch((err) => {
          console.log(err);
        });
    }
  };


  return (
    <QuestionModal showModal={showModal}>
      <div>
        <CloseButton type="button" onClick={onOpenModalClick}>X</CloseButton>
        <Headers2>Ask your Question!</Headers2>
        <h3>{`About the ${productName}`}</h3>
        <Form id="question-form">
          <label>
            Your Question:*
            <FormInput type="text" name="question" required />
          </label>
          <label>
            What is your nickname:*
            <FormInput type="text" name="nickname" required />
          </label>
          <label>
            Your email:*
            <FormInput type="text" name="email" required />
          </label>
          <FormErr hasError={unfilledError}>All fields denoted * are required</FormErr>
          <FormErr hasError={incorrectEmail}>Email provided is invalid</FormErr>
          <Button as="input" type="submit" onClick={onModalSubmit} />
        </Form>
      </div>
    </QuestionModal>
  );
};

AddQuestion.propTypes = {
  productName: PropTypes.string.isRequired,
  productID: PropTypes.number.isRequired,
  onOpenModalClick: PropTypes.func.isRequired,
  showModal: PropTypes.bool.isRequired,
};
export default AddQuestion;
