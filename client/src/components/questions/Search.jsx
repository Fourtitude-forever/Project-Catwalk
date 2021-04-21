import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Form = styled.form`
  ${(props) => {
    if (!props.anyQuestions) {
      return `
      visibility: hidden;
      `;
    }
    return `
      visibility: normal;
    `;
  }}
`;

const Search = ({ onSearchChange, onSearchSubmit, anyQuestions }) => (

  <Form anyQuestions={anyQuestions}>
    <input type="text" onChange={(e) => { onSearchChange(e); }} placeholder="Search questions" />
    <input type="submit" value="Search" onClick={(e) => onSearchSubmit(e)} />
  </Form>

);

Search.propTypes = {
  onSearchChange: PropTypes.func.isRequired,
  onSearchSubmit: PropTypes.func.isRequired,
  anyQuestions: PropTypes.bool.isRequired,
};

export default Search;
