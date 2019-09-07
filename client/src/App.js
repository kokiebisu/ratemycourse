import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Front from './pages/Front';
import Course from './pages/Course';
import Courses from './pages/Courses';

export default class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={Front} />
          <Route path="/courses/:id" component={Course} />
          <Route path="/courses" component={Courses} />
        </Switch>
      </Router>
    );
  }
}
