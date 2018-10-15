import React from 'react';
import { connect } from 'react-redux';
import { index, show, create, delete } from '../../actions/server_actions';
import { join, leave } from '../../actions/membership_actions';
import { clearErrors } from '../../actions/error_actions';
import ServerList from './servers';

const mapStateToProps = state => ({
  user: state.entities.user[state.entities.session.id],
  servers: state.entities.servers,
  errors: state.errors
});

const mapDispatchToProps = dispatch => ({
  createServer: (server) => dispatch(create(server)),
  deleteServer: (server) => dispatch(destroy(server)),
  joinServer: (server) => dispatch(join(server)),
  leaveServer: (server) => dispatch(leave(server)),
  clearErrors: () => dispatch(clearErrors())
});

export default connect(mapStateToProps, mapDispatchToProps)(ServerList);
