import React from 'react';
import { connect } from 'react-redux';
import { create } from '../../actions/server_actions';
import { join } from '../../actions/membership_actions';
import { clearErrors } from '../../actions/error_actions';
import ServerForm from './server_form';

const mapStateToProps = state => {
  // console.log(state);
  return({
  user: state.entities.user[state.entities.session.id],
  current: state.entities.servers.current,
  joined: state.entities.servers.joined,
  errors: state.errors
})};

const mapDispatchToProps = dispatch => ({
  createServer: (server) => dispatch(create(server)),
  joinServer: (server) => dispatch(join(server)),
  clearErrors: () => dispatch(clearErrors())
});

export default connect(mapStateToProps, mapDispatchToProps)(ServerForm);
