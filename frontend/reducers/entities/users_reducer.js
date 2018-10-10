import {RECEIVE_USER} from '../../actions/user_actions';

const _nullUser = Object.freeze({
  id: null
});

const userReducer = (state = _nullUser, action) => {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_USER:
      return {[action.user.id]: action.user};
    default:
      return state;
  }
};

export default userReducer;
