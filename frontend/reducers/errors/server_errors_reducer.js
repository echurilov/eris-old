import { RECEIVE_USER_ERRORS, CLEAR_SERVER_ERRORS } from '../../actions/server_actions';
import { CLEAR_ERRORS } from '../../actions/error_actions';

const _nullErrors = {'server': null};

const serverErrorsReducer = (state = _nullErrors, action) => {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_SERVER_ERRORS:
      return {...state, ...action.errors};
    case CLEAR_SERVER_ERRORS:
      return _nullErrors;
    case CLEAR_ERRORS:
      return _nullErrors;
    default:
      return state;
  }
};

export default serverErrorsReducer;
