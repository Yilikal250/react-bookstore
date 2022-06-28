import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { checkstatus } from '../redux/categories/categories';

const Categories = () => {
  const styling = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: '30px',
    height: '100px',
  };
  const categories = useSelector((state) => state.categories);
  const dispatch = useDispatch();
  const handleClick = () => {
    dispatch(checkstatus());
  };

  return (
    <>
      <div style={styling}>
        <button className="checkBtn" type="button" onClick={handleClick}>Check updates</button>
      </div>
      <h1 style={{ textAlign: 'center' }}>{categories}</h1>
    </>
  );
};

export default Categories;
