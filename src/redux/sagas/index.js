import {all} from 'redux-saga/effects';
import startAppFlow from './start-app';
import loginFlows from './login';
import profileSettingsFlows from './profile-settings';
import ordersFlows from './orders';
import addressesFlows from './addresses';

export default function* rootSaga() {
  yield all([
    startAppFlow(),
    loginFlows(),
    profileSettingsFlows(),
    ordersFlows(),
    addressesFlows(),
  ]);
}
