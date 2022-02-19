import produce from 'immer';

const INITIAL_STATE = {
  books: [],
  genres: [],
};

function books(state = INITIAL_STATE, action) {
  return produce(state, (draft) => {
    switch (action.type) {
      case '@books/GET_BOOKS_SUCCESS': {
        draft.books = action.payload.books;
        draft.genres = action.payload.genres;
        break;
      }
      default:
    }
  });
}

export default books;
