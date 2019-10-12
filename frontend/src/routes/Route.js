import React from 'react';
import PropTyes from 'prop-types';
import { Route, Redirect } from 'react-router-dom';

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

  return (
    <Route
      {...rest}
      component={Component}
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
