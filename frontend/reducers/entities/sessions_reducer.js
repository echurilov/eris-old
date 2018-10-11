import { RECEIVE_USER } from '../../actions/user_actions';
import { LOGOUT_USER } from '../../actions/session_actions';

const _nullUser = {id: null};

const sessionsReducer = (state = _nullUser, action) => {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_USER:
      return {id: action.user.id};
    case LOGOUT_USER:
      return _nullUser;
    default:
      return state;
  }
};

export default sessionsReducer;
