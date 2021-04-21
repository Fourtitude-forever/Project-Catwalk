import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

const Search = ({ onSearchChange, onSearchSubmit }) => (

  <form>
    <input type="text" onChange={(e) => { onSearchChange(e); }} placeholder="Search questions" />
    <input type="submit" value="Search" onClick={(e) => onSearchSubmit(e)} />
  </form>

);

Search.propTypes = {
  onSearchChange: PropTypes.isRequired,
  onSearchSubmit: PropTypes.isRequired,
};

export default Search;
