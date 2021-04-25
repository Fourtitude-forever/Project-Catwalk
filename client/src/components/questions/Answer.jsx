import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import { ThreadSubItem } from '../../css/sharedcss.jsx';

const Answer = ({ answer }) => (

  <div>
    <ThreadSubItem>{`A: ${answer}`}</ThreadSubItem>
  </div>

);

Answer.propTypes = {
  answer: PropTypes.string.isRequired,
};

export default Answer;
