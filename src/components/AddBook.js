import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { addBook } from '../redux/book/book';

const AddBooks = () => {
  const dispatch = useDispatch();
  const emptyBook = { title: '', author: '', category: '' };
  const [state, changeState] = useState(emptyBook);

  const handleTitle = (e) => {
    changeState({
      ...state,
      title: e.target.value,
    });
  };

  const handleAuthor = (e) => {
    changeState({
      ...state,
      author: e.target.value,
    });
  };

  const handleCategory = (e) => {
    changeState({
      ...state,
      category: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { title, author, category } = state;
    dispatch(addBook({
      id: uuidv4(),
      title,
      author,
      category,
    },
    changeState(emptyBook)));
  };

  return (
    <div className="container_form">
      <h3>ADD NEW BOOK</h3>
      <form className="flex form" onSubmit={handleSubmit}>
        <input className="form_space" type="text" value={state.title} placeholder="Book Title" onChange={handleTitle} required />
        <input className="form_space" type="text" value={state.author} placeholder="Add Author" onChange={handleAuthor} required />
        <select className="form_space" name="category" value={state.category} onChange={handleCategory}>
          <option value="" defaultValue>Category</option>
          <option value="Science Fiction">Science Fiction</option>
          <option value="Terror">Terror</option>
          <option value="Romance">Romance</option>
          <option value="Economy">Economy</option>
          <option value="Technology">Technology</option>
        </select>
        <button className="form_space btn-add" type="submit">ADD BOOK</button>
      </form>
    </div>
  );
};

export default AddBooks;
