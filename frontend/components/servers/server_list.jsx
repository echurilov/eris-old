import React from 'react';
import { Link } from 'react-router-dom';

class ServerList extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.clearErrors();
    this.props.listServers();
    console.log(this.props)
  }

  render() {
    // console.log(this.props);
    let serverList = [];
    if (this.props.joined) {
      serverList = Object.values(this.props.joined).map((server) => (
        <li key={server.id}><Link to={`/channels/${server.id}`}>{server.name}</Link></li>
      ))
    }
    return(
      <div className="server-list">
        <ul>
          {serverList}
        </ul>
        <form className="add-server"></form>
      </div>
    )
  }
}

export default ServerList;
