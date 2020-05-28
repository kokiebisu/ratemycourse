import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

// Components
import { Landing } from './components/Landing';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path='/'>
          <Landing />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
