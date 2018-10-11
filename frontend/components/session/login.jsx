import React from 'react';
import { Link } from 'react-router-dom';

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      password: '',
      email: '',
    }
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleDemo = this.handleDemo.bind(this);
  }

  componentDidMount() {
    this.props.clearErrors();
  }

  update(field) {
    return e => {
      this.setState({ [field]: e.target.value });
    }
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.processForm(this.state)
  }

  handleDemo(e) {
    e.preventDefault();
    const demoUser = { email: 'athena@pantheon.io', password: 'pallas'};
    this.props.processForm(demoUser)
  }

  renderErrors() {
    return(
      <ul>
        {this.props.errors.map((error) => (
          <li key={error + Date.now()}>
            {error}
          </li>
        ))}
      </ul>
    )
  }

  render() {
  console.log(this.props.errors);
    return(
      <div className="login-form-container">
        {this.renderErrors()}
        <form className="login-form-box">
          <br/>
          <section className="login-form">
            <label>Email:
              <input
                className="login-input"
                type="text"
                value={this.state.email}
                onChange={this.update('email')}
              />
            </label>
            <br/>
            <label>Password:
              <input
                className="login-input"
                type="password"
                value={this.state.password}
                onChange={this.update('password')}
              />
            </label>
            <br/>
            <button
              type="submit"
              onClick={this.handleSubmit}>
              Login
            </button>
            <br/>
            <p>Or log in as...</p>
            <button
              type="button"
              type="password"
              onClick={this.handleDemo}>
              Demo User
            </button>
            <br/>
            Need an account? <Link to={'/register'}>Register</Link>
          </section>
        </form>
      </div>
    )
  }
}

export default Login;
