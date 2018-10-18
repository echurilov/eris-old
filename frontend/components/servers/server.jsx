import React from 'react';
import { withRouter } from 'react-router-dom';
import ServerListContainer from './server_list_container';

class Server extends React.Component {
  constructor(props) {
    super(props);
    // this.showServer = this.showServer.bind(this);
  }

  componentDidMount() {
    // console.log(this.props);
    this.props.listServers();
    if (this.props.servers.current) {
      this.props.showServer(this.props.servers.current)
    }
    // this.props.clearErrors();
  }

  render() {
    // console.log(this.props);
    let serverName = '';
    if (this.props.servers.current) {
      serverName = this.props.servers.current.name
    }
    return(
      <div className="show-server">
        Viewing {serverName}
        <ServerListContainer />
        <div className="channels"></div>
        <div className="messages"></div>
      </div>
    )
  }
}

export default withRouter(Server);
