import React from 'react';
import { connect } from 'react-redux';
import { index, create, destroy } from '../../actions/server_actions';
import { clearErrors } from '../../actions/error_actions';
import ServerList from './server_list';

const mapStateToProps = state => {
  // console.log(state);
  return({
  user: state.entities.user[state.entities.session.id],
  current: state.entities.servers.current,
  joined: state.entities.servers.joined,
  errors: state.errors
})};

const mapDispatchToProps = dispatch => ({
  listServers: () => dispatch(index()),
  showServer: (server) => dispatch(show(server)),
  createServer: (server) => dispatch(create(server)),
  removeServer: (server) => dispatch(destroy(server)),
  clearErrors: () => dispatch(clearErrors())
});

export default connect(mapStateToProps, mapDispatchToProps)(ServerList);
