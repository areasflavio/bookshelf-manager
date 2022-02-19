import storage from 'redux-persist/lib/storage';
import { persistReducer } from 'redux-persist';

export default (reducers) => {
  const persistedReducer = persistReducer(
    {
      key: 'bookshelf',
      storage,
      whitelist: ['auth', 'theme', 'user', 'books'],
    },
    reducers
  );

  return persistedReducer;
};
