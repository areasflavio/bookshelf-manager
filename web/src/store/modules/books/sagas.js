import { all, call, put, takeLatest } from 'redux-saga/effects';
import { toast } from 'react-toastify';

import api from '../../../services/api';

import {
  getBooksFailure,
  getBooksSuccess,
  filterBooksSuccess,
} from './actions';

export function* getBooks() {
  try {
    const response = yield call(api.get, 'books');

    const books = response.data;

    const genres = response.data.map((book) => book.genre);

    yield put(getBooksSuccess(books, genres));
  } catch (error) {
    toast.error('Error getting your books.');
    yield put(getBooksFailure());
  }
}

export function* filterBooks({ payload }) {
  try {
    const response = yield call(api.get, 'books');

    const filteredBooks = response.data.filter((book) =>
      book.title.toLowerCase().includes(payload.filter.toLowerCase())
    );

    yield put(filterBooksSuccess(filteredBooks));
  } catch (error) {
    toast.error('Error getting your books.');
    yield put(getBooksFailure());
  }
}

export default all([
  takeLatest('@books/GET_BOOKS_REQUEST', getBooks),
  takeLatest('@books/FILTER_BOOKS_REQUEST', filterBooks),
]);
