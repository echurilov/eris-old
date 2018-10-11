import React from 'react';
import { connect } from 'react-redux';
import { register } from '../../actions/user_actions';
import { login } from '../../actions/session_actions';
import { clearErrors } from '../../actions/error_actions';
import Registration from './registration';

const mapStateToProps = state => ({
  errors: state.errors
});

const mapDispatchToProps = dispatch => ({
  processForm: (user) => dispatch(register(user)),
  demoLogin: (user) => dispatch(login(user)),
  clearErrors: () => dispatch(clearErrors()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Registration);
