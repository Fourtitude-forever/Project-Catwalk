import React, { useState } from 'react';
import Modal from 'react-modal';
import styled from 'styled-components';

const StyledInput = styled.input`
font-family: 'Helvetica', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif, Helvetica, sans-serif;
width: 800px;
height: 40px;
`;

const StyledButton = styled.button`
&:hover ${StyledButton} {
  background-color: #383838;
}
font-family: 'Helvetica', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif, Helvetica, sans-serif;
width: 200px;
height: 50px;
background: #1687a7;
color: white;
border: none;
border-width: thin;
display: flex;
flex-direction: row;
align-items: center;
justify-content: center;
cursor: pointer;
border-radius: 2px;
`;

const StyledH2 = styled.h2`
font-family: 'Helvetica', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif, Helvetica, sans-serif;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
margin-top: 10%;
`;

const StyledDiv = styled.div`
font-family: 'Helvetica', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif, Helvetica, sans-serif;
`;

const FormDiv = styled.form`
font-family: 'Helvetica', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif, Helvetica, sans-serif;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;

`;

const AddReview = () => {
  const [ReviewIsOpen, setReviewIsOpen] = useState(false);
  const [review, setReview] = useState('');

  return (
    <div>
      <StyledButton type="submit" onClick={() => setReviewIsOpen(true)}>Add A Review +</StyledButton>
      <Modal
        isOpen={ReviewIsOpen}
        ariaHideApp={false}
        onRequestClose={() => setReviewIsOpen(false)}
      >

        <StyledH2>Ask your Question about [Product Name Here]</StyledH2>
        <FormDiv
          type="submit"
          value="Submit"
        >
          <label htmlFor="input">
            <StyledDiv>Write Your Review:</StyledDiv>
            <span> </span>
            <StyledDiv>About the [Product Name Here]:</StyledDiv>
            <StyledInput
              className="textbox"
              type="text"
              placeholder="Why did you like the product or not?"
              value={review}
              onChange={(event) => setReview(event.target.value)}
            />
          </label>
          <p> </p>
          <StyledButton type="submit"> SUBMIT</StyledButton>
        </FormDiv>
      </Modal>
    </div>
  );
};

export default AddReview;
