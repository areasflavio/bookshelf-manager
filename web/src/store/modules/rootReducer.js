import { combineReducers } from 'redux';

import auth from './auth/reducer';
import user from './user/reducer';
import theme from './theme/reducer';
import books from './books/reducer';

export default combineReducers({ auth, user, theme, books });
