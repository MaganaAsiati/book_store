/* eslint-disable react/forbid-prop-types */
import React from 'react';
import { useDispatch } from 'react-redux';
import { deleteBook } from '../redux/books/books';

export default function Book(props) {
  const book = props;
  const dispatch = useDispatch();
  const remove = () => {
    dispatch(deleteBook(book.id));
  };

  return (
    <div className="book">
      <div className="book-title">{book.title}</div>
      <div className="book-authors">{book.author}</div>
      <button type="button" onClick={() => remove(book.id)}>
        Remove
      </button>
    </div>
  );
}
