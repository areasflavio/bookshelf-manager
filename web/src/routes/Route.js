/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';

import AuthLayout from '../pages/_layouts/Auth';
import DefaultLayout from '../pages/_layouts/Default';

function RouteWrapper({ component: Component, isPrivate, ...rest }) {
  const signed = false;

  if (!signed && isPrivate) {
    return <Redirect to="/sign-in" />;
  }

  if (signed && !isPrivate) {
    return <Redirect to="/dashboard" />;
  }

  const Layout = signed ? DefaultLayout : AuthLayout;

  return (
    <Route
      render={(props) => (
        <Layout>
          <Component {...props} />
        </Layout>
      )}
      {...rest}
    />
  );
}

RouteWrapper.propTypes = {
  isPrivate: PropTypes.bool,
  component: PropTypes.oneOfType([PropTypes.element, PropTypes.func])
    .isRequired,
};

RouteWrapper.defaultProps = {
  isPrivate: false,
};

export default RouteWrapper;
