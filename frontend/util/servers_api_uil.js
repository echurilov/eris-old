export const index = () => (
  $.ajax({
    method: 'GET',
    url: '/api/servers',
  })
);

export const create = server => (
  $.ajax({
    method: 'POST',
    url: '/api/servers',
    data: { server },
  })
);

export const show = id => (
  $.ajax({
    method: 'GET',
    url: `/api/servers/${id}`,
    data: { server },
  })
);

export const delete = server => (
  $.ajax({
    method: 'DELETE',
    url: `/api/servers/${id}`,
    data: { server },
  })
);
