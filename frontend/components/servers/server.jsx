import React from 'react';
import { withRouter } from 'react-router-dom';
import ServerListContainer from './server_list_container';
import ChannelList from '../channels/channel_list';
import ChannelContainer from '../channels/channel_container';

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
    // console.log(this.props);
  }

  render() {
    // console.log(this.props);
    // debugger;
    
    let serverId;
    if (this.props.match.path === '/channels/@me') {
      serverId = this.props.user.home;
    } else {
      serverId = this.props.match.params.serverId;
    }

    return(
      <div className="show-server">
        <div className="outer-sidebar">
          <ServerListContainer />
          <div className="ChannelListContainer">
            <ChannelList server={serverId}/>
          </div>
        </div>
      </div>
    )
  }
}

export default withRouter(Server);
