import React from 'react';
import { render } from '@testing-library/react';

import QuestionList from '../../../../../client/src/components/questions/QuestionList.jsx';

describe('QuestionList', () => {
  it('renders Q&A component', () => {
    render(<h1>Hello world</h1>);

    screen.debug();
  });
});