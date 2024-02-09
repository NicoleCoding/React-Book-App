import React from 'react';
import React, { useEffect, useState } from 'react';

/* Returns a div containing an input element and button. Both the input and button are connected to events in order to trigger the search and then display the results. */
export default function SearchBar(props) {
  return (
    <div id="searchbar">
      <input
        type="text"
        placeholder="Search for a book"
        onChange={props.changeContent}
      />
      <button onClick={() => props.search(props.query)}>Search</button>
    </div>
  );
}
