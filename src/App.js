import React from 'react';
import React, { useState } from 'react';
import './style.css';
import ResultTable from './components/ResultTable.js';
import SearchBar from './components/SearchBar.js';
import DetailView from './components/DetailView.js';

export default function App() {
  // State variables for the search result, the query (term user searches) and the book that has been clicked in table.
  const [result, setResult] = useState([]);
  const [query, setQuery] = useState('');
  const [clickedBook, setClickedBook] = useState(null);

  // Matches the query state variable with the value entered in the input.
  function changeContent(event) {
    setQuery(event.target.value);
  }

  // API is fetched upon search, where it takes the query as argument and fetches the corresponding query.
  function search(query) {
    fetch(`https://openlibrary.org/search.json?title=${query}`)
      .then((response) => response.json())
      .then((data) => setResult(data.docs));
  }
  // Changes the state variable for the clicked book to correspond with the clicked result.
  function displayBook(index) {
    setClickedBook(result[index]);
  }
  // Returns the children components SearchBar, DetailView and ResultTable
  return (
    <div id="container">
      <h1>Books API</h1>
      <img src="https://images.unsplash.com/photo-1589998059171-988d887df646?q=80&w=2076&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" width="500rem"/>
      <p>Search for a book and click on any book to view its details</p>
      <SearchBar search={search} changeContent={changeContent} query={query} />
      <DetailView clickedBook={clickedBook} />
      <ResultTable data={result} displayBook={displayBook} />
    </div>
  );
}
