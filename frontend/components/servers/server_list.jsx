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
    // console.log(this.props);
    // className="server-list-item active-server"
    // <span className="server-link-info">Home</span>
    // if (server.id === this.props.servers.current.id) {
    // } else {
    //   return(
    //     <li key={server.id} className="server-list-item">
    //       <Link className="server-link" to={`/channels/${server.id}`}></Link>
    //     </li>
    //   )
    let serverList = [];
    let newChannel;
    let activeServer;
    if (this.props.servers.joined) {
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
      <ul className="server-list">
        {serverList}
        <ServerFormContainer />
      </ul>
    )
  }
}

export default withRouter(ServerList);
