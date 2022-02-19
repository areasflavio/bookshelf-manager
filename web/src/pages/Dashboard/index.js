import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { FiBook, FiTag, FiBookOpen, FiStar } from 'react-icons/fi';
import { Route, Switch } from 'react-router-dom';

import { getBooksRequest } from '../../store/modules/books/actions';

import history from '../../services/history';

import BookForm from '../Books/BookForm';

import Categories from './Categories';
import MyBooks from './MyBooks';
import Reading from './Reading';
import FavoriteReads from './FavoriteReads';

import { Sidebar, Item } from '../../styles/sidebar';

function Dashboard() {
  const dispatch = useDispatch();

  const books = useSelector((state) => state.books.books);
  const genres = useSelector((state) => state.books.genres);

  const [currentReadingBooks, setCurrentReadingBooks] = useState([]);
  const [favoriteReadBooks, setFavoriteReadBooks] = useState([]);

  useEffect(() => {
    if (books) {
      setCurrentReadingBooks(books.filter((book) => book.is_reading === true));
      setFavoriteReadBooks(books.filter((book) => book.favorite_read === true));
    }
  }, [books]);

  const routes = [
    {
      path: '/dashboard',
      exact: true,
      sidebar: (
        <>
          <FiBook size={16} />
          <strong>My Books</strong>
        </>
      ),
      main: <MyBooks books={books} genres={['All', ...new Set(genres)]} />,
    },
    {
      path: '/dashboard/categories',
      exact: true,
      sidebar: (
        <>
          <FiTag size={16} />
          <strong>Categories</strong>
        </>
      ),
      main: <Categories genres={[...new Set(genres)]} />,
    },
    {
      path: '/dashboard/reading',
      exact: false,
      sidebar: (
        <>
          <FiBookOpen size={16} />
          <strong>Reading</strong>
        </>
      ),
      main: (
        <Reading
          books={currentReadingBooks}
          genres={['All', ...new Set(genres)]}
        />
      ),
    },
    {
      path: '/dashboard/favorites',
      exact: false,
      sidebar: (
        <>
          <FiStar size={16} />
          <strong>Favorite Reads</strong>
        </>
      ),
      main: (
        <FavoriteReads
          books={favoriteReadBooks}
          genres={['All', ...new Set(genres)]}
        />
      ),
    },
    {
      path: '/books/form',
      exact: true,
      main: <BookForm />,
    },
    {
      path: '/books/form/:id',
      exact: false,
      main: <BookForm />,
    },
  ];

  useEffect(() => {
    dispatch(getBooksRequest());
  }, [dispatch]);

  return (
    <>
      <Sidebar>
        <section>
          <span>Your books</span>

          {routes.map(
            (route) =>
              route.sidebar && (
                <Item key={route.path} to={route.path}>
                  {route.sidebar}
                </Item>
              )
          )}

          <button type="button" onClick={() => history.push('/books/form')}>
            Add book
          </button>
        </section>
      </Sidebar>

      <main style={{ flex: 1 }}>
        <Switch>
          {routes.map((route) => (
            <Route key={route.path} path={route.path} exact={route.exact}>
              {route.main}
            </Route>
          ))}
        </Switch>
      </main>
    </>
  );
}

export default Dashboard;
