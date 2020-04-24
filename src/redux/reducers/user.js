import {createReducer, createActions} from 'reduxsauce';

const {Types, Creators} = createActions({
  setUserData: ['name', 'last_name', 'email', 'phone_number'],
  setUserAuthentication: ['authentication'],
  clearUserData: [],
  startRecoveryPasswordFlow: [],
  startSingUpFlow: [],
});

export default Creators;

export const INITIAL_STATE = {
  name: null,
  email: null,
  last_name: null,
  phoneNumber: null,
  authentication: '',
};

export const setUser = (state = INITIAL_STATE, action) => {
  return {
    ...state,
    name: action.name,
    email: action.email,
    lastName: action.last_name,
    phoneNumber: action.phone_number,
  };
};

export const setAuthentication = (state = INITIAL_STATE, action) => {
  return {
    ...state,
    authentication: action.authentication,
  };
};

export const clearUser = () => {
  return {
    name: null,
    email: null,
    last_name: null,
    phoneNumber: null,
    authentication: '',
  };
};

export const HANDLERS = {
  [Types.SET_USER_DATA]: setUser,
  [Types.SET_USER_AUTHENTICATION]: setAuthentication,
  [Types.CLEAR_USER_DATA]: clearUser,
};

export const reducer = createReducer(INITIAL_STATE, HANDLERS);
