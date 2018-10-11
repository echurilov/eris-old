import * as APIUtil from '../util/user_api_util';

export const RECEIVE_USER = 'RECEIVE_USER';
export const RECEIVE_USER_ERRORS = 'RECEIVE_USER_ERRORS';
export const CLEAR_USER_ERRORS = 'CLEAR_USER_ERRORS';

const receiveUser = user => ({
  type: RECEIVE_USER,
  user
});

const receiveUserErrors = errors => ({
  type: RECEIVE_USER_ERRORS,
  errors
});

export const clearUserErrors = () => ({
  type: CLEAR_USER_ERRORS
});

export const register = user => dispatch => (
  APIUtil.register(user)
  .then(
    user => (dispatch(receiveUser(user))),
    err => (dispatch(receiveUserErrors(err.responseJSON)))
  )
);
