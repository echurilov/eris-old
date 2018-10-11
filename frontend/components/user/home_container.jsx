import React from 'react';
import { connect } from 'react-redux';
import { logout } from '../../actions/session_actions';
import { clearErrors } from '../../actions/error_actions';
import UserHome from './home';

const mapStateToProps = state => ({
  user: state.entities.user[state.entities.session.id],
  errors: state.errors
});

const mapDispatchToProps = dispatch => ({
  processForm: (user) => dispatch(logout()),
  clearErrors: () => dispatch(clearErrors())
});

export default connect(mapStateToProps, mapDispatchToProps)(UserHome);
