import React from 'react';
// import API mocking utilities from Mock Service Worker
import { rest } from 'msw'
import { setupServer } from 'msw/node'
// import utility for regenerator/runtime error
import 'regenerator-runtime/runtime';
// import react-testing methods
import { render, fireEvent, waitFor, screen } from '@testing-library/react';
// add custom jest matchers from jest-dom
import '@testing-library/jest-dom/extend-expect'

import App from '../../../../../client/src/components/App.jsx';

describe('QuestionList', () => {
  it('renders Q&A component', () => {
    render(<App />);
    // const { debug } = render(<App />);
    // screen.debug();
    expect(screen.getByText('Questions and Answers')).toBeInTheDocument();
  });
});