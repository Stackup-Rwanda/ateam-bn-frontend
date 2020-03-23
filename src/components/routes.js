import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Login from './login';
import { Profile } from './profile';

const allRoutes = () => (
  <Switch>
    <Route exact path="/profile" component={Profile} />
    <Route exact path="/login" component={Login} />
  </Switch>
);

export default allRoutes;
