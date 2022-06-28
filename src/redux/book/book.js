import { getData, addData, deleteData } from '../../data/api';

// Action-types
const ADDBOOK = 'book-store/book/ADDBOOK';
const REMOVEBOOK = 'book-store/book/REMOVEBOOK';
const GETBOOK = 'book-store/book/GETBOOK';

const books = [];

// Get a book.
export const getBook = () => async (dispatch) => {
  const res = await getData();
  // eslint-disable-next-line array-callback-return
  const data = Object.keys(res).map((key) => {
    const book = res[key][0];
    book.id = key;
    return book;
  });
  dispatch({
    type: GETBOOK,
    data,
  });
};

// Add a book.
export const addBook = (payload) => async (dispatch) => {
  const book = {
    ...payload,
    item_id: payload.id,
  };
  await addData(book);
  dispatch({
    type: ADDBOOK,
    book,
  });
};

// Delete a book.
export const removeBook = (id) => async (dispatch) => {
  await deleteData(id);
  dispatch({
    type: REMOVEBOOK,
    id,
  });
};

// Returns the state of a reducer book.
const reducerBook = (state = books, action = {}) => {
  switch (action.type) {
    case ADDBOOK:
      return [...state, action.book];
    case GETBOOK:
      return action.data;
    case REMOVEBOOK:
      return [...state].filter((book) => book.id !== action.id);
    default:
      return state;
  }
};

export default reducerBook;
