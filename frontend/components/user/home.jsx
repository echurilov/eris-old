import React from 'react';
import { withRouter } from 'react-router-dom';
import ServerListContainer from '../servers/server_list_container';
import ServerContainer from '../servers/server_container';

class UserHome extends React.Component {
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
        <ServerContainer serverId='@me'/>
        <div className="user-info">
          <p>Logged in as {this.props.user.username}</p>
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
      </div>
    )
  }
}

export default withRouter(UserHome);
