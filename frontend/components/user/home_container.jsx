import React from 'react';
import { connect } from 'react-redux';
import { logout, clearSessionErrors } from '../../actions/session_actions';
import UserHome from './home';

const mapStateToProps = state => ({
  user: state.entities.user[state.entities.session.id],
  errors: state.errors.sessionErrors
});

const mapDispatchToProps = dispatch => ({
  processForm: (user) => dispatch(logout()),
  clearErrors: () => dispatch(clearSessionErrors())
});

export default connect(mapStateToProps, mapDispatchToProps)(UserHome);
