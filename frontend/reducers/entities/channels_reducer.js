import { RECEIVE_CHANNEL, RECEIVE_CHANNELS, REMOVE_CHANNEL } from '../../actions/channel_actions';

let _nullChannels = {current: null, listed: null};

const channelsReducer = (state = _nullChannels, action) => {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_CHANNEL:
      debugger;
      // console.log("show: ", action.channel);
      return {...state, current: action.channel}
    case RECEIVE_CHANNELS:
      debugger;
      // console.log("index: ", action.channels);
      return {...state, listed: action.channels};
    case REMOVE_CHANNEL:
      return _nullChannels;
    default:
      debugger;
      // console.log(action.type);
      return state;
  }
};

export default channelsReducer;
