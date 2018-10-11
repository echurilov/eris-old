import React from 'react';

class UserHome extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
      email: '',
    }
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    console.log(this.props);
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.processForm(this.state)
    .then(this.props.history.push('/login'));
  }

  render() {
    return(
      <div className="user-info">
        <p>Logged in as {this.props.username}</p>
          <form className="logout-form-box">
            <br/>
            <section className="logout-form">
              <button
                type="submit"
                onClick={this.handleSubmit}>
                Log Out
              </button>
            </section>
          </form>
      </div>
    )
  }
}

export default UserHome;
