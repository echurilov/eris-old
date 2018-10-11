import React from 'react';
import { connect } from 'react-redux';
import { register } from '../../actions/user_actions';
import { login } from '../../actions/session_actions';
import Registration from './registration';

const mapStateToProps = ({ errors }) => ({
  errors: errors.userErrors,
});

const mapDispatchToProps = dispatch => ({
  processForm: (user) => dispatch(register(user)),
  demoLogin: (user) => dispatch(login(user)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Registration);
