import accountConstants from '../_constants/account.constants';

const initialState = {
  registering: false,
  errors: {},
};


const registration = (state = initialState, action) => {
  switch (action.type) {
    case accountConstants.REGISTER_REQUEST:
      return {
        registering: true,
        errors: {},
      };
    case accountConstants.REGISTER_SUCCESS:
      return {
        registering: false,
        errors: {},
      };
    case accountConstants.REGISTER_FAILURE:
      return {
        registering: false,
        errors: action.errors,
      };
    default:
      return state;
  }
};

export default registration;
