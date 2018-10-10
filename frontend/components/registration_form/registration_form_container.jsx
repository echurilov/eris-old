import React from 'react';
import { connect } from 'react-redux';
import { register } from '../../actions/user_actions';
import RegistrationForm from './registration_form';

const mapStateToProps = ({ errors }) => ({
  errors: errors.userErrors,
  formType: 'register'
});



const mapDispatchToProps = dispatch => ({
  processFrom: (user) => dispatch(register(user)),
});

export default connect(mapStateToProps, mapDispatchToProps)(RegistrationForm);
