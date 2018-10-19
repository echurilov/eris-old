import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { createServer } from '../../actions/server_actions';
import { joinServer } from '../../actions/membership_actions';
import { clearErrors } from '../../actions/error_actions';
import ServerForm from './server_form';

const mapStateToProps = (state) => {
  const currentServer = state.entities.servers.current;
  const joinedServers = state.entities.servers.joined;
  const currentUser = state.entities.user;
  const session = state.entities.session;

  return({
    user: currentUser[session.id],
    servers: {
      current: currentServer,
      joined: joinedServers,
    },
    errors: state.errors
  })
};

const mapDispatchToProps = dispatch => ({
  createServer: (server) => dispatch(createServer(server)),
  joinServer: (server) => dispatch(joinServer(server)),
  clearErrors: () => dispatch(clearErrors())
});

export default connect(mapStateToProps, mapDispatchToProps)(ServerForm);
