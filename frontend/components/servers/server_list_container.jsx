import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { index } from '../../actions/server_actions';
import { clearErrors } from '../../actions/error_actions';
import ServerList from './server_list';

const mapStateToProps = (state, ownProps) => {
  return({
  servers: {
    joined: state.entities.servers.joined,
  },
  errors: state.errors
})};

const mapDispatchToProps = dispatch => ({
  listServers: () => dispatch(index()),
  clearErrors: () => dispatch(clearErrors())
});

export default connect(mapStateToProps, mapDispatchToProps)(ServerList);
