export const join = id => (
  $.ajax({
    method: 'POST',
    url: '/api/memberships',
    data: id,
  })
);

export const leave = id => (
  $.ajax({
    method: 'POST',
    url: '/api/memberships',
    data: id,
  })
);
