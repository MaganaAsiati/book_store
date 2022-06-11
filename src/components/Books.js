import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import Book from './Book';
import Form from './Form';
import { fetchBooks } from '../redux/books/books';
import './Books.css';

export default function Books() {
  const books = useSelector((state) => state.book);
  // const dispatch = useDispatch();

  useEffect(() => {
    fetchBooks();
  }, []);

  return (
    <div>
      <ul className="book-list">
        {books?.map((book) => (
          <li key={book.id}>
            <Book id={book.id} title={book.title} author={book.author} category={book.category} />
          </li>
        ))}
      </ul>
      <Form />
      <hr />
    </div>
  );
}
