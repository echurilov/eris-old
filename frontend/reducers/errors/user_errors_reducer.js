import { RECEIVE_USER_ERRORS, CLEAR_USER_ERRORS } from '../../actions/user_actions';
import { CLEAR_ERRORS } from '../../actions/error_actions';

const _nullErrors = {'email':null,'username':null,'password':null};

const userErrorsReducer = (state = _nullErrors, action) => {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_USER_ERRORS:
      return action.errors;
    case CLEAR_USER_ERRORS:
      return _nullErrors;
    case CLEAR_ERRORS:
      return _nullErrors;
    default:
      return state;
  }
};

export default userErrorsReducer;
