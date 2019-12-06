import accountConstants from '../_constants/account.constants';


const accountReducer = (state = {}, action) => {
  switch (action.type) {
    case accountConstants.ME_REQUEST:
      return {
        loading: true,
      };
    case accountConstants.ME_SUCCESS:
      return {
        account: action.account,
      };
    case accountConstants.ME_FAILURE:
      return {
        error: action.error,
      };
    default:
      return state;
  }
};

export default accountReducer;
