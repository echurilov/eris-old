import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { show } from '../../actions/channel_actions';
import { clearErrors } from '../../actions/error_actions';
import Channel from './channel';

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
  showChannel: (channel) => dispatch(show(channel)),
  clearErrors: () => dispatch(clearErrors())
});

export default connect(mapStateToProps, mapDispatchToProps)(Channel);
