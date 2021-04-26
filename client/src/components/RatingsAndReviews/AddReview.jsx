import React, { useState } from 'react';
import Modal from 'react-modal';
import styled from 'styled-components';

import {
  Headers2, Button, Form, FormInput,
} from '../../css/sharedcss.jsx';

const AddReview = () => {
  const [ReviewIsOpen, setReviewIsOpen] = useState(false);

  return (
    <div>
      <Button type="submit" onClick={() => setReviewIsOpen(true)}>Add A Review +</Button>
      <Modal
        isOpen={ReviewIsOpen}
        ariaHideApp={false}
        onRequestClose={() => setReviewIsOpen(false)}
        style={{
          overlay: {
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: 'rgba(0, 0, 0, 0.35)',
          },
          content: {
            width: '40%',
            position: 'absolute',
            top: '50%',
            left: '50%',
            right: '40px',
            bottom: '40px',
            transform: 'translate(-50%, -50%)',
            border: '1px solid #ccc',
            background: '#d3e0ea',
            overflow: 'auto',
            WebkitOverflowScrolling: 'touch',
            borderRadius: '30px',
            outline: 'none',
            padding: '20px',
          },
        }}
      >

        <Headers2>Place You Review Below</Headers2>
        <h3>Review for: THIS PRODUCT</h3>
        <Form
          type="submit"
          value="Submit"
        >
          <label>
            Write your review:*
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
          <Button type="submit">SUBMIT</Button>
        </Form>
      </Modal>
    </div>
  );
};

export default AddReview;
