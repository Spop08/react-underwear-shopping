import accountConstants from '../_constants/account.constants';

const user = JSON.parse(localStorage.getItem('user'));
const initialState = user ? { loggedIn: true, user } : {};


const authenticationReducer = (state = initialState, action) => {
  switch (action.type) {
    case accountConstants.LOGIN_REQUEST:
      return { };
    case accountConstants.LOGIN_SUCCESS:
      return {
        loggedIn: true,
        user: action.user,
      };
    case accountConstants.LOGIN_FAILURE:
      return {
        loggingError: action.errors,
      };
    case accountConstants.LOGOUT:
      return {};
    default:
      return state;
  }
};

export default authenticationReducer;
