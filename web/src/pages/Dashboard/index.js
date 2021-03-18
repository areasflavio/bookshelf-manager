import React from 'react';

import { FiBook, FiTag, FiBookOpen, FiStar } from 'react-icons/fi';
import { Route, Switch } from 'react-router-dom';

import { Sidebar, Item } from '../../styles/sidebar';
import history from '../../services/history';
import BookForm from '../Books/BookForm';

import Categories from './Categories';
import MyBooks from './MyBooks';
import Reading from './Reading';
import FavoriteReads from './FavoriteReads';

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
    main: <MyBooks />,
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
    main: <Categories />,
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
    main: <Reading />,
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
    main: <FavoriteReads />,
  },
  {
    path: '/books/form',
    exact: false,
    sidebar: <></>,
    main: <BookForm />,
  },
];

function Dashboard() {
  return (
    <>
      <Sidebar>
        <section>
          <span>Your books</span>

          {routes.map((route) => (
            <Item key={route.path} to={route.path}>
              {route.sidebar}
            </Item>
          ))}

          <button type="button" onClick={() => history.replace('/books/form')}>
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
