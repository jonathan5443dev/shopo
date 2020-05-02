import {takeLatest, select, put} from 'redux-saga/effects';
import App from '../../config/app';
import ShoppingCartActions from '../reducers/shopping-cart';

export const getShoppingCart = state => state.user.shoppingCart;

function* addProductFlow(action) {
  try {
    const {product} = action;
    const shoppingCart = yield select(getShoppingCart);
    if (shoppingCart[product.id]) {
      shoppingCart.total += product.price;
      shoppingCart[product.id].quantity += 1;
    } else {
      shoppingCart.total += product.price;
      shoppingCart[product.id] = {...product, quantity: 1};
    }
    yield put(ShoppingCartActions.setShoppingCart(shoppingCart));
  } catch (e) {
    App.firebase.crashlytics.recordError(
      new Error('Error adding product to cart '),
    );
  }
}

function* removeProductFlow(action) {
  try {
    const {product} = action;
    const shoppingCart = yield select(getShoppingCart);
    if (shoppingCart[product.id].quantity === 1) {
      delete ShoppingCartActions[product.id];
    } else {
      shoppingCart[product.id].quantity -= 1;
    }
    ShoppingCartActions.setShoppingCart(shoppingCart);
  } catch (e) {
    App.firebase.crashlytics.recordError(
      new Error('Error removing product to cart'),
    );
  }
}

function* startAppFlow() {
  yield takeLatest('ADD_PRODUCT_FLOW', addProductFlow);
  yield takeLatest('REMOVE_PRODUCT_FLOW', removeProductFlow);
}

export default startAppFlow;
