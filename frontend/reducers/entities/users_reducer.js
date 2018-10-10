import {RECEIVE_CURRENT_USER} from '../../actions/user_actions';

const _nullUser = Object.freeze({
  id: null
});

const userReducer = (state = _nullUser, action) => {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_CURRENT_USER:
      return {[action.currentUser.id]: action.currentUser};
    default:
      return state;
  }
};

export default userReducer;
