export const index = (serverId) => (
  $.ajax({
    method: 'GET',
    url: `/api/servers/${serverId}/channels`,
  })
);

export const create = (channel) => (
  $.ajax({
    method: 'POST',
    url: '/api/channels',
    data: { channel },
  })
);

export const show = (id) => (
  $.ajax({
    method: 'GET',
    url: `/api/channels/${id}`
  })
);

export const destroy = (id) => (
  $.ajax({
    method: 'DELETE',
    url: `/api/channels/${id}`
  })
);
