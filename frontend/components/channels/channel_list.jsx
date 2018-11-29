import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { indexChannels } from '../../actions/channel_actions';
import { clearErrors } from '../../actions/error_actions';
import InfoContainer from '../user/info_container';

const mapStateToProps = (state) => {
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
  listChannels: (serverId) => dispatch(indexChannels(serverId)),
  clearErrors: () => dispatch(clearErrors())
});
class ChannelList extends React.Component {
  constructor(props) {
    super(props);
  }

  shouldComponentUpdate(nextProps, nextState) {
    if (this.props.server === nextProps.server) {
      return false;
    } else {
      return true;
    }
  }

  componentDidUpdate() {
    this.props.listChannels(this.props.server);
  }

  componentDidMount() {
    // this.props.clearErrors();
    this.props.listChannels(this.props.server);
    // console.log(this.props);
  }

  render() {
    // console.log(this.props);
    // debugger;

    let channelList = [];
    if (this.props.channels.listed) {
      channelList = Object.values(this.props.channels.listed).map((channel) => (
        <li className="channel-list-item" key={channel.id}><Link className="channel-link" to={`/channels/${this.props.server}/${channel.id}`}>{channel.name}</Link></li>
      ))
    }
    return(
      <div className="inner-sidebar">
        <ul className="channel-list">
          <div>ChannelFormContainer</div>
        </ul>
        <InfoContainer />
      </div>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ChannelList);
