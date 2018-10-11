import React from 'react';
import { Link } from 'react-router-dom';

class Splash extends React.Component {
  render() {
    return(
      <div>
      <Link className="logo" to={'/'}>Eris</Link>
      <br/>
      <Link className="login-button" to={'/login'}>Login</Link>
      </div>
    )
  }
}

export default Splash;
