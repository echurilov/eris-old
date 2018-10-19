import * as MembershipAPIUtil from '../util/membership_api_util';
import * as ServerAction from './server_actions';

export const JOIN_SERVER = 'JOIN_SERVER';
export const LEAVE_SERVER = 'LEAVE_SERVER';

export const joinServer = (id) => dispatch => (
  MembershipAPIUtil.join(id)
  .then(
    server => (dispatch(ServerAction.receiveServer(server))),
    error => (dispatch(ServerAction.receiveServerErrors(error.responseJSON)))
  )
);

export const leaveServer = (id) => dispatch => (
  MembershipAPIUtil.leave(id)
  .then(
    server => (dispatch(ServerAction.receiveServer(server))),
    error => (dispatch(ServerAction.receiveServerErrors(error.responseJSON)))
  )
);
