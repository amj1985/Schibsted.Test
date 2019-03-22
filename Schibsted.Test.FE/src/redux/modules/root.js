import { combineReducers } from 'redux';

import  user  from './user';
import  authentication  from './authentication';
import { alert } from './alert';
import { reducer as formReducer } from 'redux-form';

const rootReducer = combineReducers({
  user,
  authentication,
  alert,
  form : formReducer
});
export default rootReducer;

