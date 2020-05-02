import {createActions, createReducer} from 'reduxsauce';

const {Types, Creators} = createActions({
  setShoppingCart: ['shoppingCart'],
  AddProductFlow: ['product'],
  RemoveProductFlow: ['product'],
});

export default Creators;

export const INITIAL_STATE = {
  products: {},
  total: 0,
};

export const set = (state = INITIAL_STATE, action) => {
  return {
    ...state,
    total: action.shoppingCart.total,
    products: action.shoppingCart.products,
  };
};

export const HANDLERS = {
  [Types.SET_SHOPPING_CART]: set,
};

export const reducer = createReducer(INITIAL_STATE, HANDLERS);
