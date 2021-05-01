import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { SingleLineInput, HiddenButton } from '../../css/sharedcss.jsx';

const SearchForm = styled.form`
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

const SearchBar = styled(SingleLineInput)`
  font-family: Font-Awesome 5 Free, Helvetica;
`;

const Search = ({ onSearchChange, onSearchSubmit, anyQuestions }) => (

  <SearchForm anyQuestions={anyQuestions}>
    <SearchBar type="text" onChange={(e) => { onSearchChange(e); }} placeholder="Search questions" />
    <HiddenButton type="submit" value="Search" onClick={(e) => onSearchSubmit(e)} />
  </SearchForm>

);

Search.propTypes = {
  onSearchChange: PropTypes.func.isRequired,
  onSearchSubmit: PropTypes.func.isRequired,
  anyQuestions: PropTypes.bool.isRequired,
};

export default Search;
