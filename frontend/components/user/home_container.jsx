import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { logout } from '../../actions/session_actions';
import { clearErrors } from '../../actions/error_actions';
import UserHome from './home';

const mapStateToProps = state => {
  // console.log(state);
  // debugger;
  return({
    user: state.entities.user[state.entities.session.id],
    servers: {
      current: '@me',
      joined: state.entities.servers.joined,
    },
    errors: state.errors
})};

const mapDispatchToProps = dispatch => ({
  processForm: (user) => dispatch(logout()),
  clearErrors: () => dispatch(clearErrors())
});

export default connect(mapStateToProps, mapDispatchToProps)(UserHome);
