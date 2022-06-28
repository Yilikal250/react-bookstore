const CHECKSTATUS = 'book-store/categories/checkstatus';

const initialSate = [];

export const checkstatus = () => ({
  type: CHECKSTATUS,
});

const reducerCategories = (state = initialSate, action = {}) => {
  switch (action.type) {
    case CHECKSTATUS:
      return 'Under Construction';
    default:
      return state;
  }
};

export default reducerCategories;
