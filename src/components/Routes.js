import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';
import { PropTypes } from 'prop-types';
import ForgotPassword from './ResetPassword/ForgotPassword';
import ResetPassword from './ResetPassword/ResetPassword';
import SignUp from './signup';
import Login from './login';
import Profile from './profile';
import Dashboard from './Dashboard';
import Requests from './Requests/User';
import userRole from './userRole/UserRole';
import Approvals from './Approvals';
import Accommodation from './accommodation/Accommodation';
import NewAccommodation from './accommodation/NewAccommodation';
import SpecificAccommodation from './accommodation/SpecificAccommodation';
import Approval from './SingleApproval';

const Routes = () => (
  <Switch>
    {/* Auth routes */}
    <Route exact path="/profile" component={Profile} />
    <Route exact path="/" component={SignUp} />
    <Route exact path="/login" component={Login} />

    {/* reset password routes */}
    <Route
      exact
      path="/forgot-password"
      render={(props) => <ForgotPassword {...props} />}
    />
    <Route
      exact
      path="/reset-password/:userId/:token"
      render={(props) => <ResetPassword {...props} />}
    />

      {/* trip requests table routes */}
      <Route exact path="/requests" component={ Requests } />
      {/* user role routes */ }
      <Route exact path="/userRole" component={userRole} />
      <Route exact path="/dashboard" component={Dashboard} />
      <Route exact path="/requests" component={Requests} />

    {/* Manager's approvals trip request */}
    <Route exact path="/approvals" component={Approvals} />
    <Route exact path="/approvals/:id" component={Approval} />

    {/* accommodation */}
    <Route
      exact
      path="/trip/:tripId/accommodation/:accommodationId"
      render={(props) => <Accommodation {...props} />}
    />
    {/* accommodation routes */}
    <Route exact path="/accommodations" component={NewAccommodation} />
    <Route exact path="/accommodations/:id" component={SpecificAccommodation} />
  </Switch>
);

Routes.propTypes = { isAuth: PropTypes.bool, role: PropTypes.string, match: PropTypes.object };
Routes.defaultProps = { match: { params: {} }, isAuth: false, role: 'normal' };

export default connect(null)(Routes);
