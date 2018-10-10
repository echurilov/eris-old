import React from 'react';
import { Provider } from 'react-redux';
import { Route, Redirect, Switch, Link, HashRouter } from 'react-router-dom';
import RegistrationFormContainter from './user_form/registration_form_container';

cont App = () => (
  <div>
    <Switch>
      <Route path="/register" component={RegistrationFormContainter} />
    </Switch>
  </div>
);

export default App;
