import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { Route, Redirect } from 'react-router-dom';
import AuthContext from '../context/AuthContext';

const PrivateRoute = ({ children, ...rest }) => {
  const { isAuthenticated } = useContext(AuthContext);

  const getComponent = (location) => {
    switch (isAuthenticated) {
      default:
      case undefined:
        return <div>carregando...</div>;
      case false:
        return (
          <Redirect
            to={{
              pathname: '/login',
            }}
          />
        );
      case true:
        return children;
    }
  };

  return <Route {...rest} render={({ location }) => getComponent(location)} />;
};

PrivateRoute.propTypes = {
  children: PropTypes.node.isRequired,
};

export default PrivateRoute;
