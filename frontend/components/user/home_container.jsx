import React from 'react';
import { connect } from 'react-redux';
import UserHome from './home';

const mapStateToProps = ({ errors }) => ({
  errors: errors.userErrors
});

const mapDispatchToProps = dispatch => ({
  processFrom: (user) => dispatch(register(user)),
});

export default connect(mapStateToProps, mapDispatchToProps)(UserHome);
