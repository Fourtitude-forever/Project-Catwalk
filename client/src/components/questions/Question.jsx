import React, { useState, useEffect } from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';

const QuestionList = ({ question }) => (

  <div>
    <div>{question}</div>
  </div>

);

QuestionList.propTypes = {
  question: PropTypes.string.isRequired,
};

export default QuestionList;
