import * as ServersAPIUtil from '../util/servers_api_util';

export const RECEIVE_SERVERS = 'RECEIVE_SERVERS';
export const RECEIVE_SERVER = 'RECEIVE_SERVER';
export const DELETE_SERVER = 'DELETE_SERVER';
export const RECEIVE_SERVER_ERRORS = 'RECEIVE_SERVER_ERRORS';

const receiveServers = => ({
  type: RECEIVE_SERVERS,
});

const receiveServer = server => ({
  type: RECEIVE_SERVER,
  server
});

const removeServer = (id) => ({
  type: DELETE_SERVER,
  id
});

const receiveServerErrors = server => ({
  type: RECEIVE_SERVER_ERRORS,
  server
});

export const index = () => dispatch => (
  ServersAPIUtil.index()
  .then(
    server => (dispatch(receiveServers(servers))),
    error => (dispatch(receiveServerErrors(error.responseJSON)))
  )
);

export const show = (server) => dispatch => (
  ServersAPIUtil.show(server.id)
  .then(
    server => (dispatch(receiveServer(server))),
    error => (dispatch(receiveServerErrors(error.responseJSON)))
  )
);

export const create = server => dispatch => (
  ServersAPIUtil.create(server)
  .then(
    server => (dispatch(receiveServer(server))),
    error => (dispatch(receiveServerErrors(error.responseJSON)))
  )
);

export const delete = (server) => dispatch => (
  ServersAPIUtil.delete(server.id)
  .then(
    server => (dispatch(receiveServer(server))),
    error => (dispatch(receiveServerErrors(error.responseJSON)))
  )
);
