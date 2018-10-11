import React from 'react';
import { connect } from 'react-redux';
import { logout } from '../../actions/session_actions';
import UserHome from './home';

const mapStateToProps = state => ({
  user: state.entities.user[state.entities.session.id],
  errors: state.errors.userErrors
});

const mapDispatchToProps = dispatch => ({
  processForm: (user) => dispatch(logout()),
});

export default connect(mapStateToProps, mapDispatchToProps)(UserHome);
