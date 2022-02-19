import { all } from 'redux-saga/effects';

import auth from './auth/sagas';
import user from './user/sagas';
import books from './books/sagas';

function* rootSaga() {
  return yield all([auth, user, books]);
}

export default rootSaga;
