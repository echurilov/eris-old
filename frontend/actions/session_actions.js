import * as SessionAPIUtil from '../util/session_api_util';
import * as UserAPIUtil from '../util/user_api_util';

export const RECEIVE_USER = 'RECEIVE_USER';
export const LOGOUT_USER = 'LOGOUT_USER';
export const RECEIVE_SESSION_ERRORS = 'RECEIVE_SESSION_ERRORS';
export const CLEAR_SESSION_ERRORS = 'CLEAR_SESSION_ERRORS';

const receiveUser = user => ({
  type: RECEIVE_USER,
  user
});

const logoutUser = () => ({
  type: LOGOUT_USER,
});

const receiveSessionErrors = errors => ({
  type: RECEIVE_SESSION_ERRORS,
  errors
});

const removeSessionErrors = () => ({
  type: CLEAR_SESSION_ERRORS
});

export const login = user => dispatch => (
  SessionAPIUtil.login(user)
  .then(
    user => (dispatch(receiveUser(user))),
    // err => (dispatch(receiveSessionErrors(err.responseJSON)))
  )
);

export const logout = () => dispatch => (
  SessionAPIUtil.logout()
  .then(
    () => (dispatch(logoutUser())),
    // err => (dispatch(receiveSessionErrors(err.responseJSON)))
  )
);
