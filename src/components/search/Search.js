import React from 'react';
import './index.css';

const Search = ({ searchQuery, handleSearch }) => {
  return (
    <div className="search-container">
      <input
        className="input-text"
        placeholder="Search todos..."
        value={searchQuery}
        onChange={handleSearch}
        aria-label="search"
      />
    </div>
  );
};

export default Search;
