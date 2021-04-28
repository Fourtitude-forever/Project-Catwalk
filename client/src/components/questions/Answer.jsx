import React, { useState, useEffect } from 'react';
import moment from 'moment';
import PropTypes from 'prop-types';

import { ThreadSubItem, ThreadSubHeading } from '../../css/sharedcss.jsx';

const Answer = ({ answer }) => (

  <div>
    <ThreadSubItem>{answer.body}</ThreadSubItem>
    <ThreadSubHeading>{`By ${answer.answerer_name}, ${moment(answer.date).format('MMMM DD, YYYY')}`}</ThreadSubHeading>
  </div>

);

Answer.propTypes = {
  answer: PropTypes.object.isRequired,
};

export default Answer;
