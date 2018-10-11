import React from 'react';
import { connect } from 'react-redux';
import { login, clearSessionErrors } from '../../actions/session_actions';
import Login from './login';

const mapStateToProps = state => ({
  errors: state.errors.sessionErrors,
});

const mapDispatchToProps = dispatch => ({
  processForm: (user) => dispatch(login(user)),
  clearErrors: () => dispatch(clearSessionErrors())
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);
