import React from 'react';
import { useLocation } from 'react-router-dom';

const SearchResults = () => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const query = queryParams.get('query');

  console.log(`Search query: ${query}`);

  // Implement your search logic here to fetch or filter the data based on `query`

  return (
    <div>
      <h1>Search Results for "{query}"</h1>
      {/* Render your search results here */}
    </div>
  );
};

export default SearchResults;
