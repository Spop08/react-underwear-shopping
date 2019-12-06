import axios from 'axios';
import { authHeader } from '../_helpers';
import APIPath from '../components/Api';
const accountService = {
    login,
    logout,
    register,
    me,
};

export default accountService;


function login(email, password) {
  let response = axios({
    method: 'post',
    url: APIPath + `/api/accounts/auth/login/`,
    headers: { 'Content-Type': 'application/json' },
    data: {email, password},
  })
  .then(response => {
    let user = response.data;
    // Fl successful if there's a jwt token in the response
    if (user.key) {
        // store user details and jwt token in local storage to keep user logged in between page refreshes
        localStorage.setItem('user', JSON.stringify(user));
    }
    return user;
  })
  return response;
}

function logout() {
  // remove user from local storage to log user out
  localStorage.removeItem('user');
}

function register(user) {
  let response = axios({
    method: 'post',
    url: APIPath + `/api/accounts/auth/register/`,
    headers: { 'Content-Type': 'application/json' },
    data: user,
  })
  console.log(user);
  return response;
}

function me(user,) {
  let response = axios({
    method: 'get',
    url: APIPath + '/api/accounts/me/',
    headers: { ...authHeader(), 'Content-Type': 'application/json' },
    data: user,
  })

  return response;
}