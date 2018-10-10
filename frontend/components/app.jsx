import React from 'react';
import { Provider } from 'react-redux';
import { Route, Redirect, Switch, Link, HashRouter } from 'react-router-dom';
import RegistrationContainer from './user/registration_container';
import UserHome from './user/home';
import error404 from './error404';

const App = () => (
  <div>
    <Switch>
      <Route path="/register" component={RegistrationContainer} />
      <Route path="/channels/@me" component={UserHome} />
      <Route component={error404} />
    </Switch>
  </div>
);

export default App;
