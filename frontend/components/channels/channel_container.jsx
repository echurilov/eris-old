import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { showChannel, indexChannels } from '../../actions/channel_actions';
import { clearErrors } from '../../actions/error_actions';
import Channel from './channel';

const mapStateToProps = (state, ownProps) => {
  let currentChannel = state.entities.channels.current;
  debugger;
  if (state.entities.channels.listed) {
    currentChannel = state.entities.channels.listed[ownProps.match.params.channelId]
  };

  // servers: {
  //   current: state.entities.servers.current,
  //   joined: state.entities.servers.joined,
  // },

  return({
    user: state.entities.user[state.entities.session.id],
    channels: {
      current: currentChannel,
      listed: state.entities.channels.listed,
    },
    errors: state.errors
  })
};

const mapDispatchToProps = dispatch => ({
  listChannels: () => dispatch(indexChannels()),
  showChannel: (channel) => dispatch(showChannel(channel)),
  clearErrors: () => dispatch(clearErrors())
});

export default connect(mapStateToProps, mapDispatchToProps)(Channel);
