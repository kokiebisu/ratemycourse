import * as React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

// Pages
import { Landing } from './Landing';
import { CourseDetail } from './CourseDetail';
import { Login } from './Login';

export const App: React.FC<{}> = () => {
  return (
    <Router>
      <Switch>
        <Route exact path='/'>
          <Landing />
        </Route>
      </Switch>
    </Router>
  );
};
