import portfolioConstants from '../_constants/portfolio.constants';


const loansReducer = (state = {}, action) => {
  switch (action.type) {
    case portfolioConstants.LOANS_REQUEST:
      return {
        loading: true,
      };
    case portfolioConstants.LOANS_SUCCESS:
      return {
        loading: false,
        loans: action.loans,
      };
    case portfolioConstants.LOANS_FAILURE:
      return {
        loading: false,
        errors: action.errors,
      };
    default:
      return state;
  }
};

export default loansReducer;
