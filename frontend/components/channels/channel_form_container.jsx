import React from 'react';
import { connect } from 'react-redux';
import { create } from '../../actions/channel_actions';
import { join } from '../../actions/membership_actions';
import { clearErrors } from '../../actions/error_actions';
import ChannelForm from './channel_form';

const mapStateToProps = (state, ownProps) => {
  return({
  user: state.entities.user[state.entities.session.id],
  server: ownProps.match.params.serverId,
  channels: {
    current: ownProps.match.params.channelId,
    listed: state.entities.channels.listed,
  },
  errors: state.errors
})};

const mapDispatchToProps = dispatch => ({
  createChannel: (channel) => dispatch(create(channel)),
  joinChannel: (channel) => dispatch(join(channel)),
  clearErrors: () => dispatch(clearErrors())
});

export default connect(mapStateToProps, mapDispatchToProps)(ChannelForm);
