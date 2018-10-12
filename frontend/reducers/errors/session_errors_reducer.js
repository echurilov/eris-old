import { RECEIVE_SESSION_ERRORS, CLEAR_SESSION_ERRORS } from '../../actions/session_actions';
import { CLEAR_ERRORS } from '../../actions/error_actions';

const _nullErrors = {'email':null, 'password':null};

const sessionErrorsReducer = (state = _nullErrors, action) => {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_SESSION_ERRORS:
      return {...state, ...action.errors};
    case CLEAR_SESSION_ERRORS:
      return _nullErrors;
    case CLEAR_ERRORS:
      return _nullErrors;
    default:
      return state;
  }
};

export default sessionErrorsReducer;
