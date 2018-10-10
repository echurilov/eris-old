import * as APIUtil from '../util/user_api_util';

export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER';
export const RECEIVE_USER_ERRORS = 'RECEIVE_USER_ERRORS';
export const CLEAR_USER_ERRORS = 'CLEAR_USER_ERRORS';

const receiveCurrentUser = currentUser => ({
  type: RECEIVE_CURRENT_USER,
  currentUser
});

export const receiveUserErrors = errors => ({
  type: RECEIVE_USER_ERRORS,
  errors
});

const removeUserErrors = () => ({
  type: CLEAR_USER_ERRORS
});

export const register = user => dispatch => (
  APIUtil.register(user)
  .then(
    user => (dispatch(receiveCurrentUser(user))),
    err => (dispatch(receiveUserErrors(err.responseJSON)))
  )
);
