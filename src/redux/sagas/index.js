import {all} from 'redux-saga/effects';
import startAppFlow from './start-app';
import loginFlows from './login';
import profileSettingsFlows from './profile-settings';

export default function* rootSaga() {
  yield all([startAppFlow(), loginFlows(), profileSettingsFlows()]);
}
