import React from 'react';

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
    // this.props.removeUserErrors();
  }

  update(field) {
    return e => {
      this.setState({ [field]: e.target.value });
    }
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.processForm(this.state)
    .then(this.props.history.push('/channels/@me'));
  }

  handleDemo(e) {
    e.preventDefault();
    const demoUser = { email: 'athena@pantheon.io', password: 'pallas'};
    this.props.processForm(demoUser)
    .then(this.props.history.push('/channels/@me'));
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
    return(
      <div className="login-form-container">
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
          </section>
        </form>
      </div>
    )
  }
}

export default Login;
