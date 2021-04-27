import React from 'react';
import { render } from '@testing-library/react';

import QuestionList from '../components/questions/QuestionList.jsx';

describe('QuestionList', () => {
  it('renders Q&A component', () => {
    render(<QuestionList />);
  });
});
