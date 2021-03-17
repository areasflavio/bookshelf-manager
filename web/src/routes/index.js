import React from 'react';
import { Switch } from 'react-router-dom';

import Route from './Route';

import Home from '../pages/Home';
import SignIn from '../pages/SignIn';
import SignUp from '../pages/SignUp';

import Profile from '../pages/Profile';
import Dashboard from '../pages/Dashboard';
import Books from '../pages/Books';

function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/sign-in" component={SignIn} />
      <Route path="/sign-up" component={SignUp} />

      <Route path="/profile" component={Profile} isPrivate />
      <Route path="/dashboard" component={Dashboard} isPrivate />

      <Route path="/books" component={Books} isPrivate />
      <Route path="/books/:bookId" component={Books} isPrivate />
    </Switch>
  );
}

export default Routes;
