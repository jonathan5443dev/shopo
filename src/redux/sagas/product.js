import {takeLatest} from 'redux-saga/effects';
import App from '../../config/app';

function* startProductDetailFlow(action) {
  try {
    App.navigation.navigate('ProductDetail', {product: action.product});
  } catch (e) {
    throw new Error(e);
  }
}

function* productFlows() {
  yield takeLatest('START_PRODUCT_DETAIL_FLOW', startProductDetailFlow);
}

export default productFlows;
