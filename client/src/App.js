import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

// Components
import { Landing } from './components/Landing';
import {Courses} from './components/Courses';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path='/'>
          <Landing />
        </Route>
        <Route exact path='/courses'>
          <Courses />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
