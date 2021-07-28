import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import PrivateRoute from '../components/PrivateRoute';
import Login from '../pages/Login';
import Register from '../pages/Register';
import RecoverPass from '../pages/RecoverPass';
import Home from '../pages/Home';

// import Footer from '../containers/Footer';
// import Library from '../pages/Library';

const MainRouter = () => (
  <Router>
    <Switch>
      <Route path='/login'>
        <Login />
      </Route>
      <Route path='/first-access'>
        <Register />
      </Route>
      <Route path='/recover-password'>
        <RecoverPass />
      </Route>
      <PrivateRoute path='/'>
        <Home />
      </PrivateRoute>
    </Switch>
    {/* <Footer /> */}
  </Router>
);

export default MainRouter;
