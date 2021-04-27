import React from 'react';
// import API mocking utilities from Mock Service Worker
import { rest } from 'msw';
import { setupServer } from 'msw/node';
// import utility for regenerator/runtime error
import 'regenerator-runtime/runtime';
// import react-testing methods
import {
  render, fireEvent, waitFor, screen,
} from '@testing-library/react';
// add custom jest matchers from jest-dom
import '@testing-library/jest-dom/extend-expect';

import App from '../../../../../client/src/components/App.jsx';

// declare which API requests to mock
const server = setupServer(
  // capture "GET /greeting" requests
  // respond using a mocked JSON body
  rest.get('https://app-hrsei-api.herokuapp.com/api/fec2/hr-sfo/qa/questions', (req, res, ctx) => res(ctx.json({
    product_id: '5',
    results: [{
      question_id: 37,
      question_body: 'Why is this product cheaper here than other sites?',
      question_date: '2018-10-18T00:00:00.000Z',
      asker_name: 'williamsmith',
      question_helpfulness: 4,
      reported: false,
      answers: {
        68: {
          id: 68,
          body: 'We are selling it here without any markup from the middleman!',
          date: '2018-08-18T00:00:00.000Z',
          answerer_name: 'Seller',
          helpfulness: 4,
          photos: [],
        },
        70: {
          id: 70,
          body: "Some of the seams started splitting the first time I wore it!",
          date: "2019-11-28T00:00:00.000Z",
          answerer_name: "sillyguy",
          helpfulness: 6,
          photos: [],
        },
        78: {
          id: 78,
          body: "9 lives",
          date: "2019-11-12T00:00:00.000Z",
          answerer_name: "iluvdogz",
          helpfulness: 31,
          photos: [],
        },
      },
    },
    {
      question_id: 38,
      question_body: 'Why is this product here on other sites?',
      question_date: '2018-10-18T00:00:00.000Z',
      asker_name: 'williamsmith',
      question_helpfulness: 4,
      reported: false,
      answers: {
        79: {
          id: 79,
          body: 'We are selling any markup from the middleman!',
          date: '2018-08-18T00:00:00.000Z',
          answerer_name: 'Seller',
          helpfulness: 4,
          photos: [],
        },
        80: {
          id: 80,
          body: "Some of the seams started the first time I wore it!",
          date: "2019-11-28T00:00:00.000Z",
          answerer_name: "sillyguy",
          helpfulness: 6,
          photos: [],
        },
        81: {
          id: 81,
          body: "8 lives",
          date: "2019-11-12T00:00:00.000Z",
          answerer_name: "iluvdogz",
          helpfulness: 31,
          photos: [],
        },
        82: {
          id: 82,
          body: "Some of the seams started litting the first time I wore it!",
          date: "2019-11-28T00:00:00.000Z",
          answerer_name: "sillyguy",
          helpfulness: 6,
          photos: [],
        },
        83: {
          id: 83,
          body: "4 lives",
          date: "2019-11-12T00:00:00.000Z",
          answerer_name: "iluvdogz",
          helpfulness: 31,
          photos: [],
        },
      },
    }
  ],
  }))),
);

// establish API mocking before all tests
beforeAll(() => {
  server.listen();
});
// reset any request handlers that are declared as a part of our tests
// (i.e. for testing one-time error scenarios)
afterEach(() => server.resetHandlers());
// clean up once the tests are done
afterAll(() => server.close());

describe('QuestionList', () => {
  it('renders Q&A component', () => {
    // render(<App />);
    const { debug } = render(<App />);
    expect(screen.getByText('Questions and Answers')).toBeInTheDocument();
  });

  it('renders more questions on button press', async () => {
    render(<App />);
    expect(screen.getByText('See More Questions...')).toBeInTheDocument();
    expect(screen.queryByText('Q: Why is this product cheaper here than other sites?')).not.toBeInTheDocument();

    fireEvent.click(screen.getByText('See More Questions...'));
    await waitFor(() => {
      expect(screen.getByText('Q: Why is this product cheaper here than other sites?')).toBeInTheDocument();
    });
  });

  it('renders more answers on button press', async () => {
    render(<App />);
    expect(screen.getByText('+')).toBeInTheDocument();
  });

  xit('handles server error', async () => {
    server.use(
      // override the initial "GET /greeting" request handler
      // to return a 500 Server Error
      rest.get('/greeting', (req, res, ctx) => res(ctx.status(500))),
    );
  });
});
