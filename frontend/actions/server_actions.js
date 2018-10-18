import * as ServersAPIUtil from '../util/servers_api_util';

export const RECEIVE_SERVERS = 'RECEIVE_SERVERS';
export const RECEIVE_SERVER = 'RECEIVE_SERVER';
export const REMOVE_SERVER = 'REMOVE_SERVER';
export const RECEIVE_SERVER_ERRORS = 'RECEIVE_SERVER_ERRORS';
export const CLEAR_SERVER_ERRORS = 'CLEAR_SERVER_ERRORS';

const receiveServers = (servers) => ({
  type: RECEIVE_SERVERS,
  servers
});

const receiveServer = (server) => ({
  type: RECEIVE_SERVER,
  server
});

const removeServer = (id) => ({
  type: REMOVE_SERVER,
  id
});

const receiveServerErrors = (server) => ({
  type: RECEIVE_SERVER_ERRORS,
  server
});

export const clearServerErrors = () => ({
  type: CLEAR_SERVER_ERRORS
});

export const index = () => dispatch => {
  // debugger;
  return(
  ServersAPIUtil.index()
  .then(
    servers => (dispatch(receiveServers(servers))),
    error => (dispatch(receiveServerErrors(error.responseJSON)))
  )
)};

export const show = (id) => dispatch => (
  ServersAPIUtil.show(id)
  .then(
    server => (dispatch(receiveServer(server))),
    error => (dispatch(receiveServerErrors(error.responseJSON)))
  )
);

export const create = (server) => dispatch => (
  ServersAPIUtil.create(server)
  .then(
    server => (dispatch(receiveServer(server))),
    error => (dispatch(receiveServerErrors(error.responseJSON)))
  )
);

export const destroy = (id) => dispatch => (
  ServersAPIUtil.destroy(id)
  .then(
    server => (dispatch(removeServer(server))),
    error => (dispatch(receiveServerErrors(error.responseJSON)))
  )
);
