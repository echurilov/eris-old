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
  // console.log('r: ', this.props.errors);
    return(
      <div className="registration-form-container">
        <form className="registration-form-box">
          <br/>
          <section className="registration-form">
            <label>Email: {this.renderErrors('email')}
              <input
                className="registration-input"
                type="email"
                value={this.state.email}
                onChange={this.update('email')}
              />
            </label>
            <br/>
            <label>Username: {this.renderErrors('username')}
              <input
                className="registration-input"
                type="text"
                value={this.state.username}
                onChange={this.update('username')}
              />
            </label>
            <br/>
            <label>Password: {this.renderErrors('password')}
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
