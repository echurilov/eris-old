import React from 'react';
import { connect } from 'react-redux';
import { logout } from '../../actions/session_actions';
import UserHome from './home';

const mapStateToProps = ({ errors }) => ({
  errors: errors.userErrors
});

const mapDispatchToProps = dispatch => ({
  processForm: (user) => dispatch(logout()),
});

export default connect(mapStateToProps, mapDispatchToProps)(UserHome);
