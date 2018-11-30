import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { indexChannels } from '../../actions/channel_actions';
import { clearErrors } from '../../actions/error_actions';
import InfoContainer from '../user/info_container';

const mapStateToProps = (state) => {
  const currentChannel = state.entities.channels.current;
  const listedChannels = state.entities.channels.listed;

  return ({
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
    this.state = { serverId: this.props.serverId }
  }

  shouldComponentUpdate(nextProps) {
    if (this.props.serverId === nextProps.serverId) {
      return false;
    } else {
      return true;
    }
  }

  componentDidUpdate() {
    this.props.listChannels(this.props.serverId);
  }

  componentDidMount() {
    this.props.listChannels(this.props.serverId);
  }

  render() {
    console.log(this.props.channels.listed);

    let channelList = [];
    if (this.props.channels.listed) {
      channelList = Object.values(this.props.channels.listed).map((channel) => (
        <li className="channel-list-item" key={channel.id}><Link className="channel-link" to={`/channels/${this.props.serverId}/${channel.id}`}>{channel.name}</Link></li>
      ))
    }
    
    return(
      <div className="inner-sidebar">
        <ul className="channel-list">
          {channelList}
          <div>ChannelFormContainer</div>
        </ul>
        <InfoContainer />
      </div>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ChannelList);
