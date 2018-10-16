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

export const show = (id) => {
  debugger;
  return(
  $.ajax({
    method: 'GET',
    url: `/api/servers/${id}`,
    data: { server },
  })
)};

export const destroy = (id) => (
  $.ajax({
    method: 'DELETE',
    url: `/api/servers/${id}`,
    data: { server },
  })
);
