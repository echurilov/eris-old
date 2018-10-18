import { RECEIVE_SERVER, RECEIVE_SERVERS, REMOVE_SERVER } from '../../actions/server_actions';

let _nullServers = {current: null, joined: null};

const serversReducer = (state = _nullServers, action) => {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_SERVER:
      // console.log("show: ", action.server);
      return {...state, current: action.server}
    case RECEIVE_SERVERS:
      // console.log("index: ", action.servers);
      return {...state, joined: action.servers};
    case REMOVE_SERVER:
      return _nullServers;
    default:
      // console.log(action.type);
      return state;
  }
};

export default serversReducer;
