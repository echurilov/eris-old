import React from 'react';

class UserHome extends React.Component {
  render() {
    return(
      <div className="user-info">
        {this.props.username}
      </div>
    )
  }
}

export default UserHome;
