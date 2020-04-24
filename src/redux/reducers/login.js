import {createActions, createReducer} from 'reduxsauce';

const {Types, Creators} = createActions({
  authenticateUser: ['email', 'password'],
  loginSuccess: [],
  loginFailed: ['error'],
});

export default Creators;

export const INITIAL_STATE = {
  error: false,
  message: '',
};

export const success = (state = INITIAL_STATE) => {
  return {
    ...state,
    error: false,
    message: '',
  };
};

export const failure = (state = INITIAL_STATE, action) => {
  return {
    ...state,
    error: true,
    message: action.error,
  };
};

export const HANDLERS = {
  [Types.LOGIN_SUCCESS]: success,
  [Types.LOGIN_FAILED]: failure,
};

export const reducer = createReducer(INITIAL_STATE, HANDLERS);
