import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

// Pages
import Front from './pages/Front';
import Course from './pages/Course';
import Login from './pages/Login';

export default () => {
  return (
    <Router>
      <Switch>
        <Route exact path='/'>
          <Front />
        </Route>
        <Route path='/courses/:id'>
          <Course />
        </Route>
        <Route path='/login'>
          <Login />
        </Route>
      </Switch>
    </Router>
  );
};
