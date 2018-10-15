import * as SessionAPIUtil from '../util/session_api_util';
import { RECEIVE_USER } from '../actions/user_actions';

export const LOGOUT_USER = 'LOGOUT_USER';
export const RECEIVE_SESSION_ERRORS = 'RECEIVE_SESSION_ERRORS';
export const CLEAR_SESSION_ERRORS = 'CLEAR_SESSION_ERRORS';

const receiveUser = (user) => ({
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

export const clearSessionErrors = () => ({
  type: CLEAR_SESSION_ERRORS
});

export const login = (user) => dispatch => (
  SessionAPIUtil.login(user)
  .then(
    user => (dispatch(receiveUser(user))),
    error => (dispatch(receiveSessionErrors(error.responseJSON)))
  )
);

export const logout = () => dispatch => (
  SessionAPIUtil.logout()
  .then(
    () => (dispatch(logoutUser())),
    error => (dispatch(receiveSessionErrors(error.responseJSON)))
  )
);
