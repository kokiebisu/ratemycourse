import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Front from './pages/Front';
import Course from './pages/Course';
import Login from './pages/Login';

export default class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={Front} />
          <Route path="/courses/:id" component={Course} />
          <Route path="/login" component={Login} />
        </Switch>
      </Router>
    );
  }
}
