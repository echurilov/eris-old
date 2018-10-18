export const index = () => (
  $.ajax({
    method: 'GET',
    url: '/api/servers',
  })
);

export const create = (server) => (
  $.ajax({
    method: 'POST',
    url: '/api/servers',
    data: { server },
  })
);

export const show = (id) => (
  $.ajax({
    method: 'GET',
    url: `/api/servers/${id}`
  })
);

export const destroy = (id) => (
  $.ajax({
    method: 'DELETE',
    url: `/api/servers/${id}`
  })
);
