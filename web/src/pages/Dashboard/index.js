import React, { useEffect, useState } from 'react';
import { FiBook, FiTag, FiBookOpen, FiStar } from 'react-icons/fi';
import { Route, Switch } from 'react-router-dom';

import history from '../../services/history';
import api from '../../services/api';

import BookForm from '../Books/BookForm';

import Categories from './Categories';
import MyBooks from './MyBooks';
import Reading from './Reading';
import FavoriteReads from './FavoriteReads';

import { Sidebar, Item } from '../../styles/sidebar';

function Dashboard() {
  const [books, setBooks] = useState([]);
  const [genres, setGenres] = useState([]);
  const [currentReadingBooks, setCurrentReadingBooks] = useState([]);
  const [favoriteReadBooks, setFavoriteReadBooks] = useState([]);

  useEffect(() => {
    setCurrentReadingBooks(books.filter((book) => book.is_reading === true));
    setFavoriteReadBooks(books.filter((book) => book.favorite_read === true));
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
      main: <Reading books={currentReadingBooks} />,
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
      main: <FavoriteReads books={favoriteReadBooks} />,
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
    async function getMyBooks() {
      const response = await api.get('books');

      setBooks(response.data);

      const newGenres = response.data.map((book) => book.genre);

      setGenres(newGenres);
    }

    getMyBooks();
  }, []);

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
