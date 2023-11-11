// searchbox.component.jsx
import React, { useState } from 'react';

const SearchBox = ({ onChange }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearchChange = (event) => {
    const newSearchTerm = event.target.value;
    setSearchTerm(newSearchTerm);
    onChange(newSearchTerm); // Corrected from onSearch to onChange
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
