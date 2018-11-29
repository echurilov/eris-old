import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { indexChannels } from '../../actions/channel_actions';
import { clearErrors } from '../../actions/error_actions';

const mapStateToProps = (state) => {
  // const currentServer = state.entities.servers.current;
  const currentChannel = state.entities.channels.current;
  const listedChannels = state.entities.channels.listed;
  const currentUser = state.entities.user;
  const session = state.entities.session;

  return ({
    user: currentUser[session.id],
    channels: {
      current: currentChannel,
      listed: listedChannels,
    },
    errors: state.errors
  })
};

const mapDispatchToProps = dispatch => ({
  listChannels: () => dispatch(indexChannels()),
  clearErrors: () => dispatch(clearErrors())
});
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
    // debugger;

    let channelList = [];
    if (this.props.channels.listed) {
      channelList = Object.values(this.props.channels.listed).map((channel) => (
        <li className="channel-list-item" key={channel.id}><Link className="channel-link" to={`/channels/${this.props.match.params.serverId}/${channel.id}`}>{channel.name}</Link></li>
      ))
    }
    return(
      <div className="inner-sidebar">
        <ul className="channel-list">
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

export default connect(mapStateToProps, mapDispatchToProps)(ChannelList);
