import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import ServerFormContainer from './server_form_container';

class ServerList extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    // this.props.clearErrors();
    this.props.listServers();
    // console.log("serverlist: ", this.props);
  }

  render() {
    let serverList = [];
    let newChannel;
    let activeServer;
    let currentServer = {name: ''};
    if (this.props.servers.joined) {
      if (this.props.servers.joined[this.props.servers.current]) {
        currentServer.name = this.props.servers.joined[this.props.servers.current].name;
        // console.log(currentServer.name);
      }
      serverList = Object.values(this.props.servers.joined).map((server) => {
        activeServer = (this.props.servers.current == server.id) ? 'active-server' : '';
        if (server.id == this.props.user.home) {
          newChannel = '/channels/@me';
        } else {
          newChannel = `/channels/${server.id}`;
        }
        return(
          <li key={server.id} className="server-list-item">
            <Link className={`server-link ${activeServer}`} to={newChannel}></Link>
            <span className="server-link-info">{server.name}</span>
          </li>
        )
      })
    }
    return(
      <div>
        <ul className="server-list">
          {serverList}
          <ServerFormContainer />
        </ul>
        {currentServer.name}
      </div>
    )
  }
}

export default withRouter(ServerList);
