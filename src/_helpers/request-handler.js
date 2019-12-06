import { alertActions } from '../_actions';

const ERR_500_MSG = 'We are experiencing some difficulties with our service. Our technical team has been told about this. Sorry for the inconvenience.';


export function handleResponse(response) {
  return response.data;
}


export function handleErrors(dispatch, error) {
  if (error.response.status === 401) {
    localStorage.removeItem('user');
    window.location.reload(true);
  }
  else if (error.response.status === 500) {
    dispatch(alertActions.error(ERR_500_MSG))
  }
  else {
  	dispatch(alertActions.error(ERR_500_MSG))
  }
  return error;
}
