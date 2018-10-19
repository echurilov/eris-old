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
    if (this.props.servers.joined) {
      serverList = Object.values(this.props.servers.joined).map((server) => {
        if (server.id == this.props.user.home) {
          return(
            <li key={server.id} className="server-list-item">
              <Link className="server-link" to={`/channels/@me`}></Link>
              <span className="server-link-info">{server.name}</span>
            </li>
          )
        } else {
          return(
            <li key={server.id} className="server-list-item">
              <Link className="server-link" to={`/channels/${server.id}`}></Link>
              <span className="server-link-info">{server.name}</span>
            </li>
          )
        }
      })
    }

    // const atHome = (this.props.servers.current.id === '@me') ? 'active-server' : '';
    // className={`server-link ${atHome}`}
    return(
      <ul className="server-list">
        {serverList}
        <ServerFormContainer />
      </ul>
    )
  }
}

export default withRouter(ServerList);
