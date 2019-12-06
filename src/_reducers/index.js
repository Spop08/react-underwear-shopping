import { combineReducers } from 'redux';
import accountReducer from './account.reducer';
import alertReducer from './alert.reducer';
import authenticationReducer from './authentication.reducer';
import loansReducer from './loans.reducer';
import portfolioReducer from './portfolio.reducer';
import registrationReducer from './registration.reducer';


const rootReducer = combineReducers({
  authentication: authenticationReducer,
  registration: registrationReducer,
  account: accountReducer,
  alert: alertReducer,
  portfolio: portfolioReducer,
  loans: loansReducer,
});

export default rootReducer;
