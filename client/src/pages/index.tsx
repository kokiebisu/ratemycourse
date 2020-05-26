import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

// Pages
import { Front } from './Front';
import { CourseDetail } from './CourseDetail';
import Login from './Login';

export const App: React.FC<{}> = () => {
  return (
    <Router>
      <Switch>
        <Route exact path='/'>
          <Front />
        </Route>
        <Route path='/courses/:id'>
          <CourseDetail />
        </Route>
        <Route path='/login'>
          <Login />
        </Route>
      </Switch>
    </Router>
  );
};
