import { combineReducers } from 'redux';
import usersReducer from './users_reducer';
import sessionsReducer from './sessions_reducer';
import serversReducer from './sessions_reducer';

const entitiesReducer = combineReducers({
  user: usersReducer,
  session: sessionsReducer,
  server: serversReducer,
});

export default entitiesReducer;
