import {combineReducers} from 'redux';
import {reducer as userReducer} from './user';
import {reducer as loginReducer} from './login';

export default combineReducers({
  user: userReducer,
  login: loginReducer,
});
