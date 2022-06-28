import { configureStore } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';

import reducerBook from './book/book';
import reducerCategories from './categories/categories';

const store = configureStore({
  reducer: {
    books: reducerBook,
    categories: reducerCategories,
  },
  middleware: [thunk],
});

export default store;
