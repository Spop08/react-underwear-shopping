import axios from 'axios';
import { authHeader } from '../_helpers';
import APIPath from '../components/Api';
import cookie from 'react-cookies';
const portfolioService = {
  create,
  list,
  detail,
  loans,
  changeLOL,
  addGift,
  removeGift,
  getGifts,
  addFriend,
  getBride,
  getBrideList,
  editProfile,
  getFriends,
  deleteFriend,
  getGiftList
};

export default portfolioService;


function create(file, remarks) {
  let data = new FormData();
  data.append('file', file[0]);

  const response = axios({
    method: 'post',
    url: `${process.env.API_BASE_URL}/api/portfolios/`,
    headers: { ...authHeader(), 'Content-Type': 'application/json' },
    data: data,
  });
  return response;
}

function list() {
  const response = axios({
    method: 'get',
    url: APIPath + `/api/portfolios/`,
    headers: { ...authHeader(), 'Content-Type': 'application/json' },
  });
  return response;
}

function detail(portfolioCode) {
  const response = axios({
    method: 'get',
    url: `${process.env.API_BASE_URL}/api/portfolios/${portfolioCode}/`,
    headers: { ...authHeader(), 'Content-Type': 'application/json' },
  });
  return response;
}
function getGifts() {
  const response = axios({
    method: 'get',
    url: APIPath + `/api/portfolios/getGifts/`,
    headers: { ...authHeader(), 'Content-Type': 'application/json' },
  });
  return response;
}

function getGiftList() {
  const response = axios({
    method: 'get',
    url: APIPath + `/api/portfolios/getgift/`,
    headers: { ...authHeader(), 'Content-Type': 'application/json' },
  });
  return response;
}

function loans(portfolioCode) {
  const response = axios({
    method: 'get',
    url: `${process.env.API_BASE_URL}/api/portfolios/${portfolioCode}/loans/`,
    headers: { ...authHeader(), 'Content-Type': 'application/json' },
  });
  return response;
}

function changeLOL(data) {
  const response = axios({
    method: 'post',
    url: APIPath + `/api/portfolios/changeLOL/`,
    headers: { ...authHeader(), 'Content-Type': 'application/json' },
    data: data
  })
  return response
}

function addGift(data) {
  const response = axios({
    method: 'post',
    url: APIPath + '/api/portfolios/addGift/',
    headers: { ...authHeader(), 'Content-Type': 'application/json' },
    data: data
  })
  return response
}

function removeGift(data) {
  const response = axios({
    method: 'post',
    url: APIPath + '/api/portfolios/removeGift/',
    headers: { ...authHeader(), 'Content-Type': 'application/json' },
    data: data
  })
  return response
}

function addFriend(data) {
  const response = axios({
    method: 'post',
    url: APIPath + '/api/portfolios/addFriend/',
    headers: { ...authHeader(), 'Content-Type': 'application/json' },
    data: data
  })
  return response
}

function getBride(data) {
  console.log("Get Friend",data);
  const response = axios({
    method: 'post',
    url: APIPath + '/api/portfolios/isFriend/',
    headers: { ...authHeader(), 'Content-Type': 'application/json'},
    data: data
  })
  return response
}

function getBrideList(data) {
  const response = axios({
    method: 'post',
    url: APIPath + '/api/portfolios/getBride/',
    headers: { ...authHeader(), 'Content-Type': 'application/json'},
    data: data
  })
  return response
}

function editProfile(data) {
  const response = axios({
    method: 'post',
    url: APIPath + '/api/portfolios/editProfile/',
    headers: { ...authHeader(), 'Content-Type': 'application/json'},
    data: data
  })
  return response
}

function getFriends() {
  const response = axios({
    method: 'get',
    url: APIPath + '/api/portfolios/getFriends/',
    headers: { ...authHeader(), 'Content-Type': 'application/json'},
  })
  return response
}

function deleteFriend(data) {
  const response = axios({
    method: 'post',
    url: APIPath + '/api/portfolios/deleteFriend/',
    headers: { ...authHeader(), 'Content-Type': 'application/json'},
    data: data
  })
  return response  
}
