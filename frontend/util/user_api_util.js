export const register = user => (
  $.ajax({
    method: 'POST',
    url: '/api/users',
    data: { user },
  })
);
