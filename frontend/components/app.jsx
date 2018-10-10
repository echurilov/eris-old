import React from 'react';
import { Provider } from 'react-redux';
import { Route, Redirect, Switch, Link, HashRouter } from 'react-router-dom';
import Registration from './user/registration';
import UserHome from './user/home';

const App = () => (
  <div>
    <Switch>
      <Route path="/register" component={Registration} />
      <Route path="/channels/@me" component={UserHome} />
    </Switch>
  </div>
);

export default App;
