import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

const Answer = ({ answer }) => (

  <div>
    <div>{`A: ${answer}`}</div>
  </div>

);

Answer.propTypes = {
  answer: PropTypes.string.isRequired,
};

export default Answer;
