import portfolioConstants from '../_constants/portfolio.constants';


const portfolioReducer = (state = {}, action) => {
  switch (action.type) {
    case portfolioConstants.CREATE_REQUEST:
      return {
        createLoading: true,
      };
    case portfolioConstants.CREATE_SUCCESS:
      return {
        createPortfolio: action.portfolio,
      };
    case portfolioConstants.CREATE_FAILURE:
      return {
        createErrors: action.errors,
      };
    case portfolioConstants.DETAIL_REQUEST:
      return {
        detailLoading: true,
      };
    case portfolioConstants.DETAIL_SUCCESS:
      return {
        detailLoading: false,
        detailPortfolio: action.portfolio,
      };
    case portfolioConstants.DETAIL_FAILURE:
      return {
        detailLoading: false,
        detailErrors: action.errors,
      };
    case portfolioConstants.CLEAR:
      return {
      };
    default:
      return state;
  }
};

export default portfolioReducer;
