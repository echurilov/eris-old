import React from 'react';
import { connect } from 'react-redux';
import { register, clearUserErrors } from '../../actions/user_actions';
import { login } from '../../actions/session_actions';
import Registration from './registration';

const mapStateToProps = state => ({
  errors: state.errors.userErrors,
});

const mapDispatchToProps = dispatch => ({
  processForm: (user) => dispatch(register(user)),
  demoLogin: (user) => dispatch(login(user)),
  clearErrors: () => dispatch(clearUserErrors()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Registration);
