import * as ServersAPIUtil from '../util/servers_api_util';
import * as ServerAction from './server_actions';

export const JOIN_SERVER = 'JOIN_SERVER';
export const LEAVE_SERVER = 'LEAVE_SERVER';

export const join = server => dispatch => (
  ServersAPIUtil.join(server.id)
  .then(
    server => (dispatch(ServerAction.receiveServer(server))),
    error => (dispatch(ServerAction.receiveServerErrors(error.responseJSON)))
  )
);

export const leave = membership => dispatch => (
  ServersAPIUtil.leave(membership.id)
  .then(
    server => (dispatch(ServerAction.receiveServer(server))),
    error => (dispatch(ServerAction.receiveServerErrors(error.responseJSON)))
  )
);
