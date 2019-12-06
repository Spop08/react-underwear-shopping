import { accountConstants } from '../_constants';
import { handleErrors, history } from '../_helpers';
import { accountService } from '../_services';
import alertActions from './alert.actions';


function login(username, password) {
  function request(user) { return { type: accountConstants.LOGIN_REQUEST, user }; }
  function success(user) { return { type: accountConstants.LOGIN_SUCCESS, user }; }
  function failure(errors) { return { type: accountConstants.LOGIN_FAILURE, errors }; }

  return (dispatch) => {
    dispatch(request({ username }));

    accountService.login(username, password)
      .then(
        (response) => {
          const user = response.data;
          dispatch(success(user));
          history.push('/portfolio');
          // window.location.reload(true);
        },
        (error) => {
          dispatch(failure(error.response.data));
          handleErrors(dispatch, error);
        },
      );
  };
}

function logout() {
  return (dispatch) => {
    accountService.logout();
    dispatch({ type: accountConstants.LOGOUT });
    history.push('/login');
  };
}

function register(user) {
  function request(response) { return { type: accountConstants.REGISTER_REQUEST, response }; }
  function success(response) { return { type: accountConstants.REGISTER_SUCCESS, response }; }
  function failure(errors) { return { type: accountConstants.REGISTER_FAILURE, errors }; }

  return (dispatch) => {
    dispatch(request(user));
    accountService.register(user)
      .then(
        (response) => {
          const userData = response.data;
          // window.location.reload(true);
          dispatch(alertActions.success('In a few moments you\'ll receive an email from us. Please press the link provided, and that will tell us, that it\'s really your email and not an impostor.'));
          dispatch(success(userData));
          history.push('/frontend/thankyou');
          return 'success';
        },
        (error) => {
          dispatch(failure(error.response.data));
          handleErrors(dispatch, error);
        },
      );
  };
}


function me(user) {
  function request(meUser) { return { type: accountConstants.ME_REQUEST, meUser }; }
  function success(account) { return { type: accountConstants.ME_SUCCESS, account }; }
  function failure(error) { return { type: accountConstants.ME_FAILURE, error }; }

  return (dispatch) => {
    dispatch(request(user));

    accountService.me(user)
      .then(
        (response) => {
          const account = response.data;
          dispatch(success(account));
        },
        (error) => {
          dispatch(failure(error.response.data));
          handleErrors(dispatch, error);
        },
      );
  };
}

const accountActions = {
  login,
  logout,
  register,
  me,
};

export default accountActions;
