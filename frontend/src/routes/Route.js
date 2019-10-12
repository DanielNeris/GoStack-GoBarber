import React from 'react';
import PropTyes from 'prop-types';
import { Route, Redirect } from 'react-router-dom';

import AuthLayout from '../pages/_layouts/auth';
import DefaultLayout from '../pages/_layouts/default';

export default function RouteWrapper({
  component: Component,
  isPrivade,
  ...rest
}) {
  const signed = false;

  if (!signed && isPrivade) {
    return <Redirect to="/" />;
  }

  if (signed && !isPrivade) {
    return <Redirect to="/dashboard" />;
  }

  const Layout = signed ? DefaultLayout : AuthLayout;

  return (
    <Route
      {...rest}
      render={props => (
        <Layout>
          <Component {...props} />
        </Layout>
      )}
    />
  );
}

RouteWrapper.propTypes = {
  isPrivade: PropTyes.bool,
  component: PropTyes.oneOfType([PropTyes.element, PropTyes.func]).isRequired,
};

RouteWrapper.defaultProps = {
  isPrivade: false,
};
