import { combineReducers } from 'redux';
import usersReducer from './users_reducer';
import sessionsReducer from './sessions_reducer';
import serversReducer from './servers_reducer';

const entitiesReducer = combineReducers({
  user: usersReducer,
  session: sessionsReducer,
  servers: serversReducer,
});

export default entitiesReducer;
