import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { showServer, indexServers } from '../../actions/server_actions';
import { clearErrors } from '../../actions/error_actions';
import Server from './server';

const mapStateToProps = (state, ownProps) => {
  let currentServer = state.entities.servers.current;
  // debugger;
  console.log(state,ownProps);

  if (ownProps.serverId) {
    currentServer = {
      'id': '@me',
      'owner_id': state.entities.user[state.entities.session.id].id,
      'name': 'Home',
    }
  } else if (state.entities.servers.joined) {
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
  listServers: () => dispatch(indexServers()),
  showServer: (server) => dispatch(showServer(server)),
  clearErrors: () => dispatch(clearErrors())
});

export default connect(mapStateToProps, mapDispatchToProps)(Server);
