import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { showServer, indexServers } from '../../actions/server_actions';
import { clearErrors } from '../../actions/error_actions';
import ServerList from './server_list';

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
  showServer: (server) => dispatch(showServer(server)),
  listServers: () => dispatch(indexServers()),
  clearErrors: () => dispatch(clearErrors())
});

export default connect(mapStateToProps, mapDispatchToProps)(ServerList);
