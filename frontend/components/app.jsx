import React from 'react';
import { Provider } from 'react-redux';
import { Route, Redirect, Switch, Link, HashRouter } from 'react-router-dom';
import RegistrationContainer from './user/registration_container';
import LoginContainer from './session/login_container';
import HomeContainer from './user/home_container';
import error404 from './error404';

const App = () => (
  <div>
    <Switch>
      <Route path="/register" component={RegistrationContainer} />
      <Route path="/login" component={LoginContainer} />
      <Route path="/channels/@me" component={HomeContainer}/>
      <Route component={error404} />
    </Switch>
  </div>
);

export default App;
