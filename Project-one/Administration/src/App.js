import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';

import HomePage from './view/homepage'

class App extends Component {
  render() {
    return (
      <Router keyLength={12} basename="/administration">
        <div>
          <Route path="/homepage" component={HomePage} />
        </div>
      </Router>
    );
  }
}

export default App;
