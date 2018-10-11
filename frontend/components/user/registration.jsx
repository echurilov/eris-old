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
    this.props.demoLogin(demoUser)
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
      <div className="registration-form-container">
        {this.renderErrors()}
        <form className="registration-form-box">
          <br/>
          <section className="registration-form">
            <label>Email:
              <input
                className="registration-input"
                type="text"
                value={this.state.email}
                onChange={this.update('email')}
              />
            </label>
            <br/>
            <label>Username:
              <input
                className="registration-input"
                type="text"
                value={this.state.username}
                onChange={this.update('username')}
              />
            </label>
            <br/>
            <label>Password:
              <input
                className="registration-input"
                type="password"
                value={this.state.password}
                onChange={this.update('password')}
              />
            </label>
            <br/>
            <button
              type="submit"
              onClick={this.handleSubmit}>
              Sign Up
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
            <Link to={'/login'}>Already have an account?</Link>
          </section>
        </form>
      </div>
    )
  }
}

export default Registration;
