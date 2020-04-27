import {takeLatest} from 'redux-saga/effects';
import App from '../../config/app';

function* startOrdersCallback() {
  try {
    App.navigation.navigate('Orders');
  } catch (e) {
    throw new Error(e);
  }
}

function* ordersFlows() {
  yield takeLatest('START_ORDERS_FLOW', startOrdersCallback);
}

export default ordersFlows;
