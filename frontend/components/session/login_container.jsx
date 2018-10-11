import React from 'react';
import { connect } from 'react-redux';
import { login } from '../../actions/session_actions';
import Login from './login';

const mapStateToProps = state => ({
  errors: state.errors.sessionErrors,
});

const mapDispatchToProps = dispatch => ({
  processForm: (user) => dispatch(login(user)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);
