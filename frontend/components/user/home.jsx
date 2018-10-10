import React from 'react';

class UserHome extends React.Component {
  render() {
    return(
      <div className="user-info">
        {currentUser.username}
      </div>
    )
  }
}

export default UserHome;
