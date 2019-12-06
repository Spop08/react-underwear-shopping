const authHeader = () => {
  // return authorization header with jwt token
  const user = JSON.parse(localStorage.getItem('user'));

  if (user && user.key) {
    return { Authorization: `Token ${user.key}` };
  }
  return {};
};

export default authHeader;
