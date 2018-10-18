import React from 'react';
import { Link } from 'react-router-dom';
import ServerFormContainer from './server_form_container';

class ServerList extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.clearErrors();
    this.props.listServers();
    // console.log(this.props)
  }

  render() {
    // console.log(this.props);
    let serverList = [];
    if (this.props.servers.joined) {
      serverList = Object.values(this.props.servers.joined).map((server) => (
        <li key={server.id}><Link to={`/channels/${server.id}`}>{server.name}</Link></li>
      ))
    }
    return(
      <div className="server-list">
        <ul>
          <Link to={'/channels/@me'}>Home</Link>
          {serverList}
          <ServerFormContainer />
        </ul>
      </div>
    )
  }
}

export default ServerList;
