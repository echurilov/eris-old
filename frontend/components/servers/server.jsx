import React from 'react';
import { withRouter } from 'react-router-dom';
import ServerListContainer from './server_list_container';
import ChannelListContainer from '../channels/channel_list_container';
import ChannelContainer from '../channels/channel_container';

class Server extends React.Component {
  constructor(props) {
    super(props);
    // this.showServer = this.showServer.bind(this);
  }

  componentDidMount() {
    // console.log("server: ", this.props);
    this.props.listServers();
    if (this.props.servers.current) {
      this.props.showServer(this.props.servers.current)
    }
    // this.props.clearErrors();
  }

  render() {
    // console.log(this.props);
    // debugger;
    return(
      <div className="show-server">
        <div className="outer-sidebar">
          <ServerListContainer />
          <div>ChannelListContainer</div>
        </div>
        <div>ChannelContainer</div>
      </div>
    )
  }
}

export default withRouter(Server);
