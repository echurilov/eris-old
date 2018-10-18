import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { createChannel } from '../../actions/channel_actions';
import { clearErrors } from '../../actions/error_actions';
import ChannelForm from './channel_form';

const mapStateToProps = (state, ownProps) => {
  // console.log(state);

  // servers: {
  //   current: state.entities.servers.current,
  //   joined: state.entities.servers.joined,
  // },

  return({
  user: state.entities.user[state.entities.session.id],
  channels: {
    current: state.entities.channels.current,
    listed: state.entities.channels.listed,
  },
  errors: state.errors
})};

const mapDispatchToProps = dispatch => ({
  createChannel: (channel) => dispatch(createChannel(channel)),
  clearErrors: () => dispatch(clearErrors())
});

export default connect(mapStateToProps, mapDispatchToProps)(ChannelForm);
