import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { indexChannels } from '../../actions/channel_actions';
import { clearErrors } from '../../actions/error_actions';
import ChannelList from './channel_list';

const mapStateToProps = (state, ownProps) => {
  // debugger;
  return({
  user: state.entities.user[state.entities.session.id],
  channels: {
    current: state.entities.channels.current,
    listed: state.entities.channels.listed,
  },
  errors: state.errors
})};

const mapDispatchToProps = dispatch => ({
  listChannels: () => dispatch(indexChannels()),
  clearErrors: () => dispatch(clearErrors())
});

export default connect(mapStateToProps, mapDispatchToProps)(ChannelList);
