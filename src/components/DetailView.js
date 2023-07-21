import React from 'react';
import React, { useEffect, useState } from 'react';

/* Returns a div containing details for a specific clicked book. Details returned are> title, all authors, all publishers, languages and subjects. */
export default function DetailView(props) {
  if (!props.clickedBook) {
    return <div></div>;
  } else {
    return (
      <div id="details">
        <h2>Book details</h2>
        <p>
          <strong>Title:</strong> {props.clickedBook.title}
        </p>
        <p>
          <strong>Author(s):</strong> {props.clickedBook.author_name.join(', ')}
        </p>
        <p>
          <strong>Publisher:</strong> {props.clickedBook.publisher.join(', ')}
        </p>
        <p>
          <strong>Language(s):</strong> {props.clickedBook.language.join(', ')}
        </p>
        <p>
          <strong>Subject(s):</strong> {props.clickedBook.subject.join(', ')}
        </p>
      </div>
    );
  }
}
