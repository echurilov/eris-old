import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { show } from '../../actions/server_actions';
import { clearErrors } from '../../actions/error_actions';
import Server from './server';

const mapStateToProps = (state, ownProps) => {
  return({
  user: state.entities.user[state.entities.session.id],
  servers: {
    current: ownProps.match.params.serverId,
    joined: state.entities.servers.joined,
  },
  errors: state.errors
})};

const mapDispatchToProps = dispatch => ({
  showServer: (server) => dispatch(show(server)),
  clearErrors: () => dispatch(clearErrors())
});

export default connect(mapStateToProps, mapDispatchToProps)(Server);
