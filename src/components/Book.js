/* eslint-disable react/forbid-prop-types */
import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { removeBook } from '../redux/books/books';

export default function Book({ book }) {
  const dispatch = useDispatch();
  const remove = (id) => {
    dispatch(removeBook(id));
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

Book.propTypes = {
  book: PropTypes.object.isRequired,
};
