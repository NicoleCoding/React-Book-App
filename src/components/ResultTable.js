import React from 'react';
import React, { useEffect, useState } from 'react';

/* Returns a table with title, author (only first author is shown if there are several authors) and initial publication year. Returns those with the help of .map function and .slice reduces the amount of books returned to 30. On each row there is a onclick event which triggers the view of details for the clicked book. */
export default function ResultTable(props) {
  return (
    <table>
      {props.data.length > 0 && (
        <>
          <thead>
            <tr>
              <th>Title</th>
              <th>Author</th>
              <th>Initial publication year</th>
            </tr>
          </thead>
          <tbody>
            {props.data.slice(0, 29).map((queryItem, index) => {
              return (
                <tr key={index} onClick={() => props.displayBook(index)}>
                  <td>{queryItem.title}</td>
                  <td>
                    {queryItem.author_name && queryItem.author_name.length > 0
                      ? queryItem.author_name[0]
                      : 'Unknown author'}
                  </td>
                  <td>{queryItem.first_publish_year}</td>
                </tr>
              );
            })}
          </tbody>
        </>
      )}
    </table>
  );
}
