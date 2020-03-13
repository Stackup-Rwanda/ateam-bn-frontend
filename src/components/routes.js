import React from 'react';
import { Route, Switch /* , Redirect */ } from 'react-router-dom';
import Login from './login';

const allRoutes = () => (
  <Switch>
    <Route exact path="/login" component={Login} />
  </Switch>
);

// map state to props to get neccessary attributes

export default allRoutes;
