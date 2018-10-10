import React from 'react';
import { connect } from 'react-redux';
import { register } from '../../actions/user_actions';
import Registration from './registration';

const mapStateToProps = ({ errors }) => ({
  errors: errors.userErrors,
});

const mapDispatchToProps = dispatch => ({
  processFrom: (user) => dispatch(register(user)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Registration);
