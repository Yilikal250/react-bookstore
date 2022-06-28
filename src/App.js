import React from 'react';
import {
  BrowserRouter as Router, Routes, Route, Link,
} from 'react-router-dom';
import { FaUser } from 'react-icons/fa';
import Books from './components/Books';
import Categories from './components/Categories';

function App() {
  return (
    <>
      <Router>
        <header className="top_header flex">
          <div className="left_side flex">
            <h1 className="logo">Bookstore CMS</h1>
            <Link className="menu_bar" to="/">Books</Link>
            <Link className="menu_bar" to="/Categories">Categories</Link>
          </div>
          <div className="right_side">
            <FaUser />
          </div>
        </header>
        <Routes>
          <Route path="/" element={<Books />} />
          <Route path="/Categories" element={<Categories />} />
        </Routes>
      </Router>
    </>

  );
}

export default App;
