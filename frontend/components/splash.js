import React from 'react';
import { Link } from 'react-router-dom';

class Splash extends React.Component {
  render() {
    return(
      <div>
        <header>
          <div className="header-outer">
            <nav className="header-inner">
              <ul className="left-nav-list">
                <li><div className="logo-box"><Link className="logo" to={'/'}>Eris</Link></div></li>
                <li className="nav-item"><Link className="nav-link" to={'/'}>Download</Link></li>
                <li className="nav-item"><Link className="nav-link" to={'/'}>Nitro</Link></li>
                <li className="nav-item"><Link className="nav-link" to={'/'}>Jobs</Link></li>
                <li className="nav-item"><div className="dropdown">
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
                </div></li>
                <li className="nav-item"><div className="dropdown">
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
                </div></li>
                <li className="nav-item"><Link className="nav-link" to={'/'}>Blog</Link></li>
                <li className="nav-item"><div className="dropdown">
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
                </li>
              </ul>
              <ul className="right-nav-list">
                <button className="button-login"><Link to={'/login'}>Login</Link></button>
              </ul>
            </nav>
          </div>
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
