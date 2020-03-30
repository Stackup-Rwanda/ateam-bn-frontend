/* eslint-disable import/no-unresolved */
import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Routes from './Routes';
import '../App.scss';
import '../assets/css/style.scss';
import '../assets/style/profile/_profile.scss';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes />
      </Router>
    </div>
  );
}

export default App;
