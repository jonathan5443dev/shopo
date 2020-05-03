import {takeLatest, select, put} from 'redux-saga/effects';
import App from '../../config/app';
import ShoppingCartActions from '../reducers/shopping-cart';

export const getShoppingCart = state => state.shoppingCart;

function* addProductFlow(action) {
  try {
    const {product} = action;
    const shoppingCart = yield select(getShoppingCart);
    if (shoppingCart.products[product.id]) {
      shoppingCart.products[product.id].quantity += 1;
    } else {
      shoppingCart.products[product.id] = {...product, quantity: 1};
    }
    shoppingCart.total += product.price;
    yield put(ShoppingCartActions.setShoppingCart(shoppingCart));
    alert('OK');
  } catch (e) {
    alert(e);
    App.firebase.crashlytics.recordError(
      new Error('Error adding product to cart '),
    );
  }
}

function* removeProductFlow(action) {
  try {
    const {product} = action;
    const shoppingCart = yield select(getShoppingCart);
    if (shoppingCart.products[product.id].quantity === 1) {
      delete shoppingCart.products[product.id];
    } else {
      shoppingCart.products[product.id].quantity -= 1;
    }
    shoppingCart.total -= product.price;
    yield put(ShoppingCartActions.setShoppingCart(shoppingCart));
    alert('OK');
  } catch (e) {
    alert(e);
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
