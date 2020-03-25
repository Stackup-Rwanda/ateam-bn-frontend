import React from 'react';
import './App.scss';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Login from './components/login';
import Requests from './components/Requests/User';

function App() {
  return (
    <div className="App">
      {/* <button className="btn-green" type="submit">Sign up</button> */}
      <Router>
        <Switch>
          <Route path="/" exact component={Login} />
          <Route path="/requests" exact component={Requests} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
