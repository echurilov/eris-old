import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import ChannelFormContainer from './channel_form_container';

class ChannelList extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    // this.props.clearErrors();
    this.props.listChannels();
    // console.log(this.props)
  }

  render() {
    // console.log(this.props);
    debugger;

    let serverName = '';
    if (this.props.servers.current) {
      serverName = this.props.servers.current.name
    }

    let channelList = [];
    if (this.props.channels.listed) {
      channelList = Object.values(this.props.channels.listed).map((channel) => (
        <li className="channel-list-item" key={channel.id}><Link className="channel-link" to={`/channels/${this.props.match.params.serverId}/${channel.id}`}>{channel.name}</Link></li>
      ))
    }
    return(
      <div className="inner-sidebar">
      {serverName}
        <ul className="channel-list">
          {channelList}
          <div>ChannelFormContainer</div>
        </ul>
        <div className="user-info">
          <p>Logged in as {this.props.user.username}</p>
          <form className="logout-form-box">
            <br/>
            <section className="logout-form">
              <button
                type="submit"
                onClick={this.handleSubmit}>
                Log Out
              </button>
            </section>
          </form>
        </div>
      </div>
    )
  }
}

export default withRouter(ChannelList);
