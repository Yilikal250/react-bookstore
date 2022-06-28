import React from 'react';
import PropTypes from 'prop-types';
import { CircularProgressBar } from '@tomik23/react-circular-progress-bar';
import { useDispatch } from 'react-redux';
import { removeBook } from '../redux/book/book';

const Book = ({
  id, category, title, author,
}) => {
  const dispatch = useDispatch();
  const words = ['Introduction', 'The Boy Who Lived', 'The Vanishing Glass', 'The Keeper of the Keys', 'Out of Her Favor', 'Dreamers Often Lie', 'The Mask of Night', 'Biology', 'Chemistry', 'Health'];
  const handleClick = (e, bookId) => {
    e.preventDefault();
    dispatch(removeBook(bookId));
  };

  const randomChapter = words[Math.floor(Math.random() * words.length)];
  const percent = Math.floor(Math.random() * 59);
  return (
    <div className="container flex">
      <div key={id} className="card">
        <div className="topics">{category}</div>
        <div className="title fonts">{title}</div>
        <div className="author">{author}</div>
        <div className="div_btn">
          <button type="button">Comments</button>
          <button type="button" onClick={(e) => handleClick(e, id)}>Remove</button>
          <button type="button">Edit</button>
        </div>
      </div>
      <div className="circle flex">
        <CircularProgressBar
          animationSmooth="1s ease-out"
          colorCircle="#f1f1f1"
          colorSlice="#FF6D00"
          percent={percent}
          linearGradient={['#379cf6', '#307bbe']}
          size={110}
        />
        <div className="direction">
          <p className="percentage">
            {percent}
            %
          </p>
          <p style={{ textAlign: 'center', fontSize: 20 }}>Complete</p>
        </div>
      </div>
      <div className="chapter">
        <h4>CURRENT CHAPTER</h4>
        <p>
          Chapter
          {' '}
          {Math.floor(Math.random() * 24) + 1}
          {' '}
          :
          {randomChapter}
        </p>
        <button className="progress_btn" type="button">UPDATE PROGRESS</button>
      </div>
    </div>
  );
};

Book.propTypes = {
  id: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
};

export default Book;
