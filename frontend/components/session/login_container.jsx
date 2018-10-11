import React from 'react';
import { connect } from 'react-redux';
import { login } from '../../actions/session_actions';
import { clearErrors } from '../../actions/error_actions';
import Login from './login';

const mapStateToProps = state => ({
  errors: state.errors
});

const mapDispatchToProps = dispatch => ({
  processForm: (user) => dispatch(login(user)),
  clearErrors: () => dispatch(clearErrors())
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);
