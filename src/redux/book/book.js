const ADDBOOK = 'book-store/books/ADDBOOK';
const REMOVEBOOK = 'book-store/books/REMOVEBOOK';

export const addBook = (book) => ({
  type: ADDBOOK,
  book,
});

export const removeBook = (id) => ({
  type: REMOVEBOOK,
  id,
});

const books = [];

export const reducer = (state = books, action = {}) => {
  switch (action.type) {
    case ADDBOOK:
      return [...state, action.book];
    case REMOVEBOOK:
      return [...state].filter((book) => book.id !== action.id);
    default:
      return state;
  }
};
