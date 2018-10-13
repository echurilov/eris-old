import React from 'react';
import { Link } from 'react-router-dom';

class Registration extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
      email: '',
    }
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleDemo = this.handleDemo.bind(this);
  }

  componentDidMount() {
    // console.log('cDM: ', this.props.errors);
    this.props.clearErrors();
  }

  update(field) {
    return e => {
      this.setState({ [field]: e.target.value });
    }
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.clearErrors();
    this.props.processForm(this.state);
  }

  handleDemo(e) {
    e.preventDefault();
    const demoUser = { email: 'athena@pantheon.io', password: 'pallas'};
    this.props.demoLogin(demoUser)
  }

  renderErrors(type) {
    let errorList = [];
    Object.entries(this.props.errors).map((entry) => {
      errorList = errorList.concat(Object.entries(entry[1]))
    })
    return(
      <ul>
        {errorList.map((error) => {
          if (type === error[0]) {return(
            error[1]&&error[1].map((err,index) => {
              if (err.charAt(0) === err.charAt(0).toUpperCase()){
                return(<li key={error[0] + index + Date.now()}>
                  {err}
                </li>)
              } else {
                return(<li key={error[0] + index + Date.now()}>
                  {error[0]} {err}
                </li>)
              }
            })
          )}
        }
      )}
      </ul>
    )
  }

  render() {
  // console.log(this.props.errors);
    return(
      <div className="login-page">
        <div className="logo">
          <div className="logo-img"></div>
          <div className="logo-txt"></div>
        </div>
        <div className="login-form-container">
          <form className="login-form-box">
            <h1>Welcome back!</h1>
            <h2>We're so excited to see you again!</h2>
            <section className="login-form">
              <section className="login-field">
                <label className="form-label">Email {this.renderErrors('email')}
                  <input
                    className="login-input"
                    type="email"
                    value={this.state.email}
                    onChange={this.update('email')}
                  />
                </label>
              </section>
              <section className="login-form">
                <label className="form-label">Username {this.renderErrors('password')}
                  <input
                    className="login-input"
                    type="username"
                    value={this.state.username}
                    onChange={this.update('username')}
                  />
                </label>
              </section>
              <section className="login-form">
                <label className="form-label">Password {this.renderErrors('password')}
                  <input
                    className="login-input"
                    type="password"
                    value={this.state.password}
                    onChange={this.update('password')}
                  />
                </label>
              </section>
              <span className="link"><button className="link-button" onClick={this.handleDemo}>Or log in as Demo User</button></span>
              <br/>
              <button
                className="button-login"
                type="submit"
                onClick={this.handleSubmit}>
                Register
              </button>
              <span class="login-text">Already have an account?</span> <span className="link">
              <Link to={'/login'}>Login</Link></span>
            </section>
          </form>
        </div>
      </div>
    )
  }
}

export default Registration;
