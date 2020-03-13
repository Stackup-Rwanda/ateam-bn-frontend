import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Routes from './routes';

const App = () => (
  <div>
    <Router>
      <Routes />
    </Router>
  </div>
);

export default App;
