import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { show, index } from '../../actions/server_actions';
import { clearErrors } from '../../actions/error_actions';
import Server from './server';

const mapStateToProps = (state, ownProps) => {
  let currentServer = state.entities.servers.current;

  if (state.entities.servers.joined) {
    currentServer = state.entities.servers.joined[ownProps.match.params.serverId]
  };

  return({
    user: state.entities.user[state.entities.session.id],
    servers: {
      current: currentServer,
      joined: state.entities.servers.joined,
    },
    errors: state.errors
  })
};

const mapDispatchToProps = dispatch => ({
  listServers: () => dispatch(index()),
  showServer: (server) => dispatch(show(server)),
  clearErrors: () => dispatch(clearErrors())
});

export default connect(mapStateToProps, mapDispatchToProps)(Server);
