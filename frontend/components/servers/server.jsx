import React from 'react';
import ServerListContainer from './server_list_container';

class Server extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    console.log(this);
    // this.props.clearErrors();
  }

  render() {
    // console.log(this.props);
    return(
      <div className="show-server">
        <ServerListContainer />
        <div className="channels"></div>
        <div className="messages"></div>
      </div>
    )
  }
}

export default Server;
