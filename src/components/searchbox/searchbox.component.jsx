import React, { useState } from 'react';

const SearchBox = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearchChange = (event) => {
    const newSearchTerm = event.target.value;
    setSearchTerm(newSearchTerm);
    onSearch(newSearchTerm); 
  };

  return (
    <div>
      <input
        type="search"
        name="searchbox"
        placeholder="Enter keywords to search for blogs"
        value={searchTerm}
        onChange={handleSearchChange}
      />
    </div>
  );
};

export default SearchBox;
