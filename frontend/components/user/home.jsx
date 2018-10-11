import React from 'react';

class UserHome extends React.Component {
  constructor(props) {
    super(props);
    // this.state = {};
  }

  componentDidMount() {
    console.log(this.props);
  }

  render() {
    return(
      <div className="user-info">
        <p>Logged in as {this.props.username}</p>
      </div>
    )
  }
}

export default UserHome;
