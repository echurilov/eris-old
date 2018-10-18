import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { index } from '../../actions/channel_actions';
import { clearErrors } from '../../actions/error_actions';
import ChannelList from './channel_list';

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
  listChannels: () => dispatch(index()),
  clearErrors: () => dispatch(clearErrors())
});

export default connect(mapStateToProps, mapDispatchToProps)(ChannelList);
