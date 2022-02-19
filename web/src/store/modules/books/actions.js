export function getBooksRequest() {
  return {
    type: '@books/GET_BOOKS_REQUEST',
  };
}

export function getBooksSuccess(books, genres) {
  return {
    type: '@books/GET_BOOKS_SUCCESS',
    payload: { books, genres },
  };
}

export function getBooksFailure() {
  return {
    type: '@books/GET_BOOKS_FAILURE',
  };
}
