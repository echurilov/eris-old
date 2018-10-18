import React from 'react';
import { Link } from 'react-router-dom';
import ChannelFormContainer from './server_form_container';

class ChannelList extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.clearErrors();
    this.props.listChannels();
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
          <ChannelFormContainer />
        </ul>
      </div>
    )
  }
}

export default ChannelList;
