import React from 'react';
import { withRouter } from 'react-router-dom';
import ServerListContainer from './server_list_container';
import ChannelListContainer from '../channels/channel_list_container';
import ChannelContainer from '../channels/channel_container';
import InfoContainer from '../user/info_container';

class Server extends React.Component {
  constructor(props) {
    super(props);
    // this.showServer = this.showServer.bind(this);
  }

  shouldComponentUpdate(nextProps, nextState) {
    if (this.props.match.params.serverId === nextProps.match.params.serverId) {
      return false;
    } else {
      return true;
    }
  }

  componentDidUpdate() {
      if (this.props.match.path === '/channels/@me') {
        this.props.showServer(this.props.user.home)
      } else if (this.props.match.params.serverId == this.props.user.home) {
        this.props.showServer(this.props.match.params.serverId)
          .then(data => this.props.history.push(`/channels/@me`));
      } else {
        this.props.showServer(this.props.match.params.serverId);
      }
  }

  componentDidMount() {
    if (this.props.match.path === '/channels/@me') {
      this.props.showServer(this.props.user.home)
    } else if (this.props.match.params.serverId == this.props.user.home) {
      this.props.showServer(this.props.match.params.serverId)
        .then(data => this.props.history.push(`/channels/@me`));
    } else {
      this.props.showServer(this.props.match.params.serverId);
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
        <InfoContainer />
      </div>
    )
  }
}

export default withRouter(Server);
