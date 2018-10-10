import React from 'react';

class UserHome extends React.Component {
  render() {
    return(
      <div className="user-info">
        <p>Logged in as {this.props.username}</p>
      </div>
    )
  }
}

export default UserHome;
