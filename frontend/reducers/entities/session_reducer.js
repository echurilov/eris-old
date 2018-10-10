import { RECEIVE_USER } from '../../actions/user_actions';
import { LOGOUT_USER } from '../../actions/session_actions';

const _nullUser = Object.freeze({
  id: null
});

const sessionReducer = (state = _nullUser, action) => {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_USER:
      return {[action.user.id]: action.user};
    case LOGOUT_USER:
      return _nullUser;
    default:
      return state;
  }
};

export default sessionReducer;
