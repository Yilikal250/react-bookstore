import { configureStore, combineReducers } from 'react-redux';

import reducerBook from './book/book';
import reducerCategories from './categories/categories';

const reducer = combineReducers({
  books: reducerBook,
  categories: reducerCategories,
});

const store = configureStore(reducer);

export default store;
