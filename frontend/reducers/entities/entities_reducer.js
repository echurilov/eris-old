import { combineReducers } from 'redux';
import usersReducer from './users_reducer';
import sessionsReducer from './sessions_reducer';

const entitiesReducer = combineReducers({
  users: usersReducer,
  sessions: sessionsReducer,
});

export default entitiesReducer;
