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
