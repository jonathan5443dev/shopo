import {takeLatest} from 'redux-saga/effects';
import App from '../../config/app';

function* startAddressesCallback() {
  try {
    App.navigation.navigate('Addresses');
  } catch (e) {
    throw new Error(e);
  }
}

function* startCreateAddressCallback() {
  try {
    App.navigation.navigate('CreateAddress');
  } catch (e) {
    throw new Error(e);
  }
}

function* addressesFlows() {
  yield takeLatest('START_ADDRESSES_FLOW', startAddressesCallback);
  yield takeLatest('START_CREATE_ADDRESS_FLOW', startCreateAddressCallback);
}

export default addressesFlows;
