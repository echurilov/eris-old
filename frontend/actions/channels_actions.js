import * as ChannelsAPIUtil from '../util/channels_api_util';

export const RECEIVE_CHANNELS = 'RECEIVE_CHANNELS';
export const RECEIVE_CHANNEL = 'RECEIVE_CHANNEL';
export const REMOVE_CHANNEL = 'REMOVE_CHANNEL';
export const RECEIVE_CHANNEL_ERRORS = 'RECEIVE_CHANNEL_ERRORS';
export const CLEAR_CHANNEL_ERRORS = 'CLEAR_CHANNEL_ERRORS';

const receiveChannels = (channels) => ({
  type: RECEIVE_CHANNELS,
  channels
});

const receiveChannel = (channel) => ({
  type: RECEIVE_CHANNEL,
  channel
});

const removeChannel = (id) => ({
  type: REMOVE_CHANNEL,
  id
});

const receiveChannelErrors = (channel) => ({
  type: RECEIVE_CHANNEL_ERRORS,
  channel
});

export const clearChannelErrors = () => ({
  type: CLEAR_CHANNEL_ERRORS
});

export const index = () => dispatch => (
  ChannelsAPIUtil.index()
  .then(
    channels => (dispatch(receiveChannels(channels))),
    error => (dispatch(receiveChannelErrors(error.responseJSON)))
  )
);

export const show = (channel) => dispatch => (
  ChannelsAPIUtil.show(channel.id)
  .then(
    channel => (dispatch(receiveChannel(channel))),
    error => (dispatch(receiveChannelErrors(error.responseJSON)))
  )
);

export const create = (channel) => dispatch => (
  ChannelsAPIUtil.create(channel)
  .then(
    channel => (dispatch(receiveChannel(channel))),
    error => (dispatch(receiveChannelErrors(error.responseJSON)))
  )
);

export const destroy = (channel) => dispatch => (
  ChannelsAPIUtil.destroy(channel.id)
  .then(
    channel => (dispatch(removeChannel(channel))),
    error => (dispatch(receiveChannelErrors(error.responseJSON)))
  )
);
