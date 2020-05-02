import {combineReducers} from 'redux';
import {reducer as userReducer} from './user';
import {reducer as loginReducer} from './login';
import {reducer as shoppingCartReducer} from './shopping-cart';

export default combineReducers({
  user: userReducer,
  login: loginReducer,
  shoppingCart: shoppingCartReducer,
});
