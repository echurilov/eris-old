import { RECEIVE_CHANNEL, RECEIVE_CHANNELS, REMOVE_CHANNEL } from '../../actions/channel_actions';

let _nullChannel = {current: null, listed: null};

const channelsReducer = (state = _nullChannel, action) => {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_CHANNEL:
      // console.log("show: ", action.channel);
      return {...state, current: action.channel.id}
    case RECEIVE_CHANNELS:
      // console.log("index: ", action.channels);
      return {...state, listed: action.channels};
    case REMOVE_CHANNEL:
      return _nullChannel;
    default:
      // console.log(action.type);
      return state;
  }
};

export default channelsReducer;
