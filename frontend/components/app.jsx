import React from 'react';
import { Provider } from 'react-redux';
import { Route, Redirect, Switch, Link, HashRouter } from 'react-router-dom';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import SplashContainer from './splash/splash_container';
import RegistrationContainer from './user/registration_container';
import LoginContainer from './session/login_container';
import ServerContainer from './servers/server_container';
// import ChannelContainer from './channels/channel_container';
import Error404 from './error404';

const App = () => (
  <div className="app">
    <Switch>
      <AuthRoute exact path="/" component={SplashContainer} />
      <AuthRoute path="/register" component={RegistrationContainer} />
      <AuthRoute path="/login" component={LoginContainer} />
      <ProtectedRoute path="/channels/@me" serverId='@me' component={ServerContainer}/>
      <ProtectedRoute path="/channels/:serverId/:channelId" component={ServerContainer} />
      <ProtectedRoute path="/channels/:serverId" component={ServerContainer} />
      <Route component={Error404} />
    </Switch>
  </div>
);

export default App;
