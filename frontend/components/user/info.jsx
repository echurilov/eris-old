import React from 'react';
import { withRouter } from 'react-router-dom';

class UserInfo extends React.Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    this.props.clearErrors();
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.clearErrors();
    this.props.processForm(this.state);
  }

  render() {
    // console.log(this.props);
    return(
      <div className="user-home">
        <div className="user-info">
          <p>Logged in as {this.props.user.username}</p>
          <form className="logout-form-box">
            <br/>
            <section className="logout-form">
              <button className="logout-button"
                type="submit"
                onClick={this.handleSubmit}>
                Log Out
              </button>
            </section>
          </form>
        </div>
      </div>
    )
  }
}

export default withRouter(UserInfo);
