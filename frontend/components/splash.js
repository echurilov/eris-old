import React from 'react';
import { Link } from 'react-router-dom';

class Splash extends React.Component {
  render() {
    return(
      <div>
        <header>
          <Link className="logo" to={'/'}>Eris</Link>
          <Link className="nav-link" to={'/'}>Download</Link>
          <Link className="nav-link" to={'/'}>Nitro</Link>
          <Link className="nav-link" to={'/'}>Jobs</Link>
          <div className="dropdown">
            <button className="dropbtn-dev">Developers</button>
            <div className="dropdown-content">
              <Link className="dropdown-link" to={'/'}>
                <span className="dropdown-text">Developer Portal</span>
            </Link>
              <Link className="dropdown-link" to={'/'}>
                <span className="dropdown-text">Rich Presence</span>
            </Link>
              <Link className="dropdown-link" to={'/'}>
                <span className="dropdown-text">Open Source</span>
            </Link>
            </div>
          </div>
          <div className="dropdown">
            <button className="dropbtn-comm">Community</button>
            <div className="dropdown-content">
              <Link className="dropdown-link" to={'/'}>
                <span className="dropdown-text">Partners</span>
              </Link>
              <Link className="dropdown-link" to={'/'}>
                <span className="dropdown-text">Guidelines</span>
              </Link>
              <Link className="dropdown-link" to={'/'}>
                <span className="dropdown-text">Hype Squad</span>
              </Link>
              <Link className="dropdown-link" to={'/'}>
                <span className="dropdown-text">Verification</span>
              </Link>
            </div>
          </div>
          <Link className="nav-link" to={'/'}>Blog</Link>
          <div className="dropdown">
          <button className="dropbtn-sup">Support</button>
            <div className="dropdown-content">
              <Link className="dropdown-link" to={'/'}>
                <span className="dropdown-text">Help & Support</span>
              </Link>
              <Link className="dropdown-link" to={'/'}>
                <span className="dropdown-text">Status</span>
              </Link>
              <Link className="dropdown-link" to={'/'}>
                <span className="dropdown-text">Parent's Guide</span>
              </Link>
              <Link className="dropdown-link" to={'/'}>
                <span className="dropdown-text">Security</span>
              </Link>
            </div>
          </div>
          <Link className="button-login" to={'/login'}>Login</Link>
        </header>
        <main>
          <h1>It's time to ditch Nike and Harmonia.</h1>
          <p>A chat for deities that's free, secure, and works on both your desktop and phone. Stop paying for Harmonia servers and hassling with Nike. Simplify your life.</p>
        </main>
        <footer>
        </footer>
      </div>
    )
  }
}

export default Splash;
