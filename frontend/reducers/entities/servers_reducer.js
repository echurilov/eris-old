import { RECEIVE_SERVER, RECEIVE_SERVERS, DELETE_SERVER } from '../../actions/server_actions';

let _nullServer = {id: null};

const serversReducer = (state = _nullServer, action) => {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_SERVER:
      return {...state, id: action.server.id}
    case RECEIVE_SERVERS:
      const servers = {};
      action.servers.forEach(server => {
        servers[server.id] = server;
      });
      return servers;
    case DELETE_SERVER:
      return _nullServer;
    default:
      return state;
  }
};

export default serversReducer;
