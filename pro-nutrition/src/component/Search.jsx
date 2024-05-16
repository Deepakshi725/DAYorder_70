/* eslint-disable */
import React from 'react';
import './Search.css';

const Search = ({ onSearch }) => {
  return (
    <div className='search_food'>
      <input
        type="text"
        placeholder="Search food..."
        onChange={(e) => onSearch(e.target.value)}
      />
    </div>
  );
};

export default Search;
