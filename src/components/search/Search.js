import React from 'react';
import './index.css';

const Search = ({ searchQuery, handleSearch }) => {
  return (
    <div className="search-container">
      <input
        className="input-text"
        value={searchQuery}
        onChange={handleSearch}
      />
    </div>
  );
};

export default Search;
