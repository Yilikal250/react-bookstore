import React from 'react';
import { useSelector } from 'react-redux/es/hooks/useSelector';
import Book from './Book';
import AddBooks from './AddBook';

const Books = () => {
  const booksArray = useSelector((state) => state.books);
  const handleSubmit = () => {};

  return (
    <>
      {booksArray.map((book) => (
        <div key={book.id}>
          <Book id={book.id} category={book.category} title={book.title} author={book.author} />
        </div>
      ))}
      <AddBooks onsubmit={handleSubmit} />
    </>
  );
};

export default Books;
