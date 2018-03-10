import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';

import HomePage from './view/homepage'
import Signup from './view/sign_up'
import Login from './view/log_in'
import Pricing from './view/pricing'
import HowItWorks from './view/how_it_works'
import Hiring from './view/how_it_works/hiring'
import SignUpParent from './view/sign_up_freelancer/sign_up_parent'
import Developers from './view/developers/developers_parent'
import AllTypes from './view/all_types'
import Project from './view/sign_up_project/sign_up_parent'
import PersonProject from './view/person_project'

class App extends Component {
  render() {
    return (
      <Router keyLength={12} basename="/abc">
        <div>
          <Route exact path="/homepage" component={HomePage} />
          <Route path="/signup" component={Signup} />
          <Route path="/login" component={Login} />
          <Route path="/pricing" component={Pricing} />
          <Route path="/howitworks" component={HowItWorks} />
          <Route path="/sign_up" component={SignUpParent} />
          <Route path="/developers" component={Developers}/>
          <Route path="/all_types" component={AllTypes}/>
          <Route path="/sign_up_project" component={Project}/>
          <Route path="/person_project" component={PersonProject}/>
        </div>
      </Router>
    );
  }
}

export default App;
